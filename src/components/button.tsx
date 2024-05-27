"use client";

import { useEffect, useState } from "react";
import { ImageLike, createWorker } from "tesseract.js";

const MyButton = () => {
  const [selectedFile, setSelectedFile] = useState<ImageLike>("");
  const [text, setText] = useState<string>("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file);

    setSelectedFile(file);
  };

  const handleClick = async () => {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(selectedFile);
    console.log(ret.data.text);
    setText(ret.data.text);
    await worker.terminate();
  };

  useEffect(() => {
    handleClick();
  }, [selectedFile]);
  return (
    <>
      <label className="bg-white text-black py-4 px-8 mb-4 cameraButton">
        Read text from photo
        <input
          type="file"
          accept="image/*;capture=camera"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <p className="p-4 border">{text}</p>
      {/* <button className="bg-white p-5 mt-10 text-black" onClick={handleClick}>
        Recognize text
      </button> */}
    </>
  );
};

export default MyButton;
