import Canvas from "src/components/Canvas";
import ClientOnly from "src/components/ClientOnly";

export default function ID({ data }: any) {
  console.log("🚀 ～ file: [id].tsx:5 ～ ID ～ data:", data.content);
  return (
    <ClientOnly>
      {data ? (
        <Canvas canvas={JSON.parse(data.content)} />
      ) : (
        <div className="err">
          id 信息有误，请检查之后重新输入，或者微信联系作者
        </div>
      )}
    </ClientOnly>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(
    "http://template.codebus.tech/api/web/content/publishList"
  );
  const data = await res.json();

  return {
    paths: ["/3"],
    fallback: true,
  };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
// 此函数在服务端的构建阶段调用，不会在客户端调用，因此这里相当于是直接查询数据库 SSG
export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    "http:localhost:7002/api/web/content/get?id=" + (params.id || 2)
  );
  const data = await res.json();
  console.log("🚀 a:", data.result);

  return {
    props: {
      data: data.result,
    },
  };
}
