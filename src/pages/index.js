import Center from '../components/Center';
import Sidebar from '../components/Sidebar';
import { getSession } from 'next-auth/react';

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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
