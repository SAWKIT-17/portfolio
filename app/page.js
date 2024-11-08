export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="topbar flex flex-row w-full py-3 px-4 justify-between">
        <a className="flex items-center">
          <h1>Nicolas Wieckiewicz</h1>
        </a>
        <nav className="">
          <div className="flex flex-col justify-center mr-3">
            <ul className="flex flex-row space-x-3 flex flex-col justify-center mr-3">
              <li className="ml-2 flex flex-row">
                <span>/</span>
                <span className="ml-1">Info</span>
              </li>
              <li className="ml-2 flex flex-row">
                <span>/</span>
                <span className="ml-1">Projects</span>
              </li>
              <li className="ml-2 flex flex-row">
                <span>/</span>
                <span className="ml-1">Contact</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
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
