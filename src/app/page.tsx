import MyButton from "@/components/button";

export default function Home() {
  return (
    <main className="flex items-start justify-evenly bg-white gap-3">
      <div className="border-solid border-2 border-black w-5 h-[100dvh] bg-red-500"></div>
      <div className="border-solid border-2 border-black w-5 h-[100vh] bg-green-500"></div>
    </main>
  );
}
