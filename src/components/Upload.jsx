import React, { useState } from "react";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

function Upload() {
  function handle(e) {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file);
    const storage = getStorage();
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
  }

  return (
    <div>
      <form action="" onSubmit={handle}>
        <input type="file" />
        <button type="submit"> Upload </button>
      </form>
    </div>
  );
}

export default Upload;
