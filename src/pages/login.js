import { getProviders, signIn } from 'next-auth/react';

// Logo
import SpotifyLogo from '../assets/SpotifyLogo';

const Login = ({ providers }) => {
  return (
    <main className="bg-black min-h-screen flex flex-col space-y-12 items-center justify-center">
      <div className="text-[#1DB954] h-24">
        <SpotifyLogo className="h-full" />
      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="bg-[#1DB954] text-white p-3 px-8 rounded-full"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </main>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
