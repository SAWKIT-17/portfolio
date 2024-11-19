import Topbar from "./components/topbar";
import Homepage from "./components/homepage";
import Info from "./components/info";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] font-luciole overflow-clip">
      <Topbar />
      <main className="flex flex-col justify-center h-screen overflow-hidden">
        <div className="flex justify-center py-4 px-2 md:px-4 lg:px-10 xl:px-20 md:mx-4 lg:mx-10 xl:mx-20 md:mb-2 lg:mb-6 h-full max-h-full overflow-y-scroll overflow-x-hidden">
          <div className="absolute inset-40 bg-gradient-to-tr from-black via-blue-900 to-black blur-3xl opacity-40"></div>
          <Homepage />
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
