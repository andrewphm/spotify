import Sidebar from '../components/Sidebar';

import consoleMessage from '../utilities/consoleMessage';

export default function Home() {
  consoleMessage();

  return (
    <div className="">
      <main>
        <Sidebar />

        {/* main */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
