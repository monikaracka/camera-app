"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { ImageLike, createWorker } from "tesseract.js";

const MyButton = () => {
  const [selectedFile, setSelectedFile] = useState<ImageLike>("");
  const [text, setText] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");

  const scanNumber = async (event: any) => {
    const photo = event.target?.files[0];

    if (photo) {
      //recognize text from photo
      const worker = await createWorker("eng");
      const ret = await worker.recognize(photo);
      const textFromPhoto = ret.data.text;
      await worker.terminate();
      //filter numbers from text
      const numberFromText = textFromPhoto.replace(/[^0-9]/g, "");
      setCardNumber(numberFromText);
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target?.files[0];
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

  const filterNumbers = () => {
    const numberFromText = text.replace(/[^0-9]/g, "");
    setCardNumber(numberFromText);
  };

  useEffect(() => {
    handleClick();
  }, [selectedFile]);

  useEffect(() => {
    filterNumbers();
  }, [text]);

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
      {text && <p className="p-4 mb-3 border">{text}</p>}
      {cardNumber && <p className="p-4 border">{cardNumber}</p>}
      {/* <button className="bg-white p-5 mt-10 text-black" onClick={handleClick}>
        Recognize text
      </button> */}
    </>
  );
};

export default MyButton;
