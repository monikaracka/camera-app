import MyButton from "@/components/button";

export default function Home() {
  return (
    <main className="flex justify-evenly bg-white items-center gap-3">
      <div className="border-solid border-2 border-black w-5 h-[100dvh] bg-red-500"></div>
      <div className="border-solid border-2 w-5 h-[100vh] bg-green-500"></div>
    </main>
  );
}
