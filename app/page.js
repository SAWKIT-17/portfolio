import Topbar from "./components/topbar";
import Home from "./components/home";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] font-luciole">
      <Topbar />
      <main className="flex flex-col justify-center h-full bg-white">
        <div className="flex justify-center pt-4 m-4 h-full border-4 border-slate-800">
          <img className="w-40 h-min" src="/homer.png"></img>
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
