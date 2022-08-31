import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function Record() {
  const [name, setName] = useState("");
  const [times, setTimes] = useState(0);
  const [lists, setLists] = useState([]);
  const recordRef = collection(db, "Records");

  const makeALists = async () => {
    await addDoc(recordRef, { name: name, sets: Number(times) });
  };
  const increaseSets = async (id, sets) => {
    const recordDoc = doc(db, "Records", id);
    const increaseCount = { sets: sets + 1 };
    await updateDoc(recordDoc, increaseCount);
  };
  const decreaseSets = async (id, sets) => {
    const recordDoc = doc(db, "Records", id);
    const DecreaseCount = { sets: sets - 1 };
    await updateDoc(recordDoc, DecreaseCount);
  };
  const deleteSets = async (id) => {
    const recordDoc = doc(db, "Records", id);
    await deleteDoc(recordDoc);
  };

  useEffect(() => {
    const getname = async () => {
      const data = await getDocs(recordRef);
      setLists(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getname();
  }, []);

  return (
    <div>
      <h1>workout record</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="HIHIHIHIHHI"
      />
      <input
        type="number"
        value={times}
        onChange={(e) => setTimes(e.target.value)}
        placeholder="HIHIHIHIHHI"
      />
      <button onClick={makeALists}>Plus List</button>
      <ul>
        {lists.map((list) => (
          <li>
            {list.name} {list.sets}sets
            <button
              onClick={() => {
                increaseSets(list.id, list.sets);
              }}
            >
              Increase sets
            </button>
            <button
              onClick={() => {
                decreaseSets(list.id, list.sets);
              }}
            >
              Decrease sets
            </button>
            <button
              onClick={() => {
                deleteSets(list.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Record;
