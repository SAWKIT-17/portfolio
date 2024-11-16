import Topbar from "./components/topbar";
import Homepage from "./components/home";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] font-luciole overflow-clip">
      <Topbar />
      <main className="flex flex-col justify-center h-screen overflow-hidden">
        <div className="flex justify-center py-4 px-2 md:px-4 lg:px-10 xl:px-20 md:mx-4 lg:mx-10 xl:mx-20 md:mb-2 lg:mb-6 h-full max-h-full bg-white text-black border-4 border-accent border-opacity-100 overflow-y-scroll overflow-x-hidden">
          <Homepage />
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
