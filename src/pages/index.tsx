import Head from "next/head";

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>{data?.title || "bubucuo"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bubucuo.png" />
        <meta name="description" content="bubucuo lowcode low code" />
      </Head>
      <main>
        <div className="err">id</div>
      </main>
    </>
  );
}
