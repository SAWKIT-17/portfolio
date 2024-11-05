export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="topbar flex flex-row w-full py-3 px-4 justify-between">
        <a className="flex items-center">
          <h1>Nicolas Wieckiewicz</h1>
        </a>
        <nav>
          <div>
            <ul className="flex flex-row space-x-3">
              <li>
                <span>/</span>
                <span>Info</span>
              </li>
              <li>
                <span>/</span>
                <span>Projects</span>
              </li>
              <li>
                <span>/</span>
                <span>Contact</span>
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
