import MyButton from "@/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      
      <MyButton />
      <div className="flex flex-col justify-between">
      <div className="border-solid border-2 w-5 h-[100dvh]"></div>
      <div className="border-solid border-2 w-5 h-full"></div>
      </div>
    </main>
  );
}
