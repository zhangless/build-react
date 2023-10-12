import Canvas from "src/components/Canvas";
import ClientOnly from "src/components/ClientOnly";

export default function ID({ data }: any) {
  return (
    <ClientOnly>
      {data ? (
        <Canvas canvas={JSON.parse(data.content)} />
      ) : (
        <div className="err">id 信息有误 请检查或联系微信联系 qq1109658303</div>
      )}
    </ClientOnly>
  );
}

export const getStaticPaths = async () => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:7002/api/web/content/publishList"
      : "http://api.ricedog.top/api/web/content/publishList";
  const res = await fetch(url);
  const data = await res.json();
  return {
    paths: data.result.data.map((item: number) => `/${item}`),
    fallback: true,
  };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
// 此函数在服务端的构建阶段调用，不会在客户端调用，因此这里相当于是直接查询数据库 SSG
export async function getStaticProps({ params }: { params: { id: string } }) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:7002/api/web/content/get?id=" + (params.id || 2)
      : "http://api.ricedog.top/api/web/content/get?id=" + (params.id || 2);
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data: data.result,
    },
  };
}
