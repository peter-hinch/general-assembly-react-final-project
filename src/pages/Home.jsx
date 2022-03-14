import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../firebase/firebase-config';

function Home() {
  const [locations, setLocations] = useState([]);
  const locationsCollectionRef = collection(db, 'locations');

  useEffect(() => {
    const getLocations = async () => {
      const data = await getDocs(locationsCollectionRef);
      setLocations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getLocations();
  }, []);

  return (
    <div>
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
