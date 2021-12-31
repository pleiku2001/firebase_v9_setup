import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Main() {
  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "user");
  const [newName, setNewName] = useState();
  const [newAge, setNewAge] = useState();
  //   const  newName  = useRef();
  //   const  newAge  = useRef();

  const createUser = async () => {
    await addDoc(usersCollection, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "user", id);
    const newFields = { age: age + 1 };
    // console.log(age,id)
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "user", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollection);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1>Main Background</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Add User</button>

      {/* <form action="" onSubmit={createUser}>
        <input type="text" name="" id="" ref={newName}/>
        <input type="text" name="" id="" ref={newAge}/>
        <button>Submit</button>
      </form> */}

      {users.map((user) => {
        return (
          <>
            <ul>
              <li key={user.id}>
                <p>
                  {user.name} <b>{user.age}</b>
                  <button
                    onClick={() => {
                      updateUser(user.id, user.age);
                    }}
                  >
                    +1
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </p>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default Main;

// {users.map((user)=>(
//     <div>
//         <div>

//         {user.name}
//         </div>

//     </div>

// ))}
