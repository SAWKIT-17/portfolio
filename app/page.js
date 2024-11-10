import Topbar from "./components/topbar";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <Topbar />
      <main className="flex flex-col justify-center h-full">
        <div className="flex justify-center pt-4">
          <img className="w-40" src="/homer.png"></img>
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
