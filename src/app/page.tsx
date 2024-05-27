import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <label className="cameraButton">
        Take a picture
        <input type="file" accept="image/*;capture=camera" />
      </label>
    </main>
  );
}
