import Topbar from "./components/topbar";
import Homepage from "./components/homepage";
//import Info from "./components/info";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] font-luciole overflow-clip">
      <Topbar />
      <main className="flex flex-col justify-center h-screen overflow-hidden">
        <div className="flex justify-center py-4 px-2 md:px-4 lg:px-10 xl:px-20 md:mx-4 lg:mx-10 xl:mx-20 md:mb-2 lg:mb-6 h-full max-h-full overflow-y-scroll overflow-x-hidden">
          <div className="pointer-events-none fixed bottom-0 mx-auto h-full w-3/4 max-w-screen-2xl -rotate-2 touch-none rounded-full bg-gradient-to-tr opacity-25 blur-[8rem] from-violet-700 to-blue-600"></div>
          <Homepage />
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}

