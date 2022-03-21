import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  GeoPoint,
  deleteDoc
} from 'firebase/firestore';
import { db } from './../firebase/firebase-config';
import { transition, pageVariants } from './../theme/GlobalVariants';

// Basic Firebase CRUD functionality implemented using the following tutorial:
// CRUD Tutorial Using React + Firebase | Firebase 9 and Firestore Tutorial
// Reference: https://www.youtube.com/watch?v=jCY6DH8F4oc

function FirestoreEx() {
  const [hiddenId, setHiddenId] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputLat, setInputLat] = useState(0);
  const [inputLong, setInputLong] = useState(0);
  const [locations, setLocations] = useState([]);
  const locationsCollectionRef = collection(db, 'locations');

  const createLocation = async () => {
    await addDoc(locationsCollectionRef, {
      name: inputName,
      coords: new GeoPoint(inputLat, inputLong)
    });
    setInputName('');
    setInputLat('');
    setInputLong('');
  };

  const editLocation = (id, name, lat, long) => {
    setHiddenId(id);
    setInputName(name);
    setInputLat(lat);
    setInputLong(long);
  };

  const updateLocation = async () => {
    const locationDoc = doc(db, 'locations', hiddenId);
    const newLocation = {
      name: inputName,
      coords: new GeoPoint(inputLat, inputLong)
    };
    await updateDoc(locationDoc, newLocation);
  };

  const deleteLocation = async (id) => {
    const locationDoc = doc(db, 'locations', id);
    await deleteDoc(locationDoc);
  };

  useEffect(() => {
    const getLocations = async () => {
      const data = await getDocs(locationsCollectionRef);
      setLocations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getLocations();
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      key="home"
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
    >
      Name:
      <input
        type="text"
        placeholder="name"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />
      Location:
      <input
        type="number"
        placeholder="latitude"
        value={inputLat}
        onChange={(event) => setInputLat(parseFloat(event.target.value))}
      />
      <input
        type="number"
        placeholder="longitude"
        value={inputLong}
        onChange={(event) => setInputLong(parseFloat(event.target.value))}
      />
      <button onClick={createLocation}>Add Location</button>
      <button onClick={updateLocation}>Update Location</button>
      <ul>
        {locations.map((loc) => (
          <li key={loc.id}>
            {loc.name} {loc.coords._lat}, {loc.coords._long}
            <button
              onClick={() =>
                editLocation(
                  loc.id,
                  loc.name,
                  loc.coords._lat,
                  loc.coords._long
                )
              }
            >
              Edit
            </button>
            <button onClick={() => deleteLocation(loc.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default FirestoreEx;
