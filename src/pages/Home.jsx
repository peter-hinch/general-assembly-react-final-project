import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, GeoPoint } from 'firebase/firestore';
import { db } from './../firebase/firebase-config';

// Basic Firebase CRUD functionality implemented using the following tutorial:
// CRUD Tutorial Using React + Firebase | Firebase 9 and Firestore Tutorial
// Reference: https://www.youtube.com/watch?v=jCY6DH8F4oc

function Home() {
  const [inputName, setInputName] = useState('');
  const [inputLat, setInputLat] = useState(0);
  const [inputLong, setInputLong] = useState(0);
  const [locations, setLocations] = useState([]);
  const locationsCollectionRef = collection(db, 'locations');

  const createLocation = async () => {
    await addDoc(locationsCollectionRef, {
      name: inputName,
      location: new GeoPoint(inputLat, inputLong)
    });
  };

  useEffect(() => {
    const getLocations = async () => {
      const data = await getDocs(locationsCollectionRef);
      setLocations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getLocations();
  }, [locationsCollectionRef]);

  return (
    <div>
      Name:
      <input
        type="text"
        placeholder="name"
        onChange={(event) => setInputName(event.target.value)}
      />
      Location:
      <input
        type="number"
        placeholder="latitude"
        onChange={(event) => setInputLat(parseFloat(event.target.value))}
      />
      <input
        type="number"
        placeholder="longitude"
        onChange={(event) => setInputLong(parseFloat(event.target.value))}
      />
      <button onClick={createLocation}>Add Location</button>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            {location.name} {location.location._lat}, {location.location._long}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
