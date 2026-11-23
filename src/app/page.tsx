import Link from "next/link";


export default async function Home() {
  // const session = await auth();

  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }

  return (
    <main>
        <h1>Q q c ta fazendo aqui?</h1>
        <h2>
          A unica coisa q tem por enquanto é isso{" "}
          <Link className="text-blue-600 underline" href="/minhas_fichas/feiticeiro">
            aqui
          </Link>
        </h2>
    </main>
  );
}
