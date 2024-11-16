import Topbar from "./components/topbar";
import Homepage from "./components/home";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] font-luciole overflow-clip">
      <Topbar />
      <main className="flex flex-col justify-center h-screen overflow-hidden">
        <div className="flex justify-center py-4 px-8 mx-4 mb-4 h-full max-h-full bg-white text-black border-4 border-blue-600 border-opacity-100 overflow-y-scroll">
          <Homepage />
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
