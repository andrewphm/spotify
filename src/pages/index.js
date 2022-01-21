import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

import consoleMessage from '../utilities/consoleMessage';

export default function Home() {
  consoleMessage();

  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
