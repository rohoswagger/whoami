import Head from "next/head";

const Hero: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Roshan Desai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-bold mb-4">Roshan Desai</h1>
        {/* <p className="text-3xl mb-8">Founder (or at least trying to be)</p> */}
      </div>
    </div>
  );
};

export default Hero;
