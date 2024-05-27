"use client";

import { useState } from "react";
import { ImageLike, createWorker } from "tesseract.js";

const MyButton = () => {
  const [selectedFile, setSelectedFile] = useState<ImageLike>("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file);

    setSelectedFile(file);
  };
  const handleClick = async () => {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(selectedFile);
    console.log(ret.data.text);
    await worker.terminate();
  };
  return (
    <>
      <label className="cameraButton">
        Take a picture
        <input
          type="file"
          accept="image/*;capture=camera"
          onChange={handleFileChange}
        />
      </label>
      <button className="bg-white p-5 text-black" onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default MyButton;
