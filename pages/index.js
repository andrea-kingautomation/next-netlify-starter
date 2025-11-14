import Head from "next/head";
import fs from "fs";
import path from "path";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home({ page }) {
  return (
    <div className="container" data-sb-object-id="index">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title={page.title} />
        <p className="description" data-sb-field-path="description">
          {page.description}
        </p>
      </main>
      <Footer logo={page.footer.logo} logoAlt={page.footer.logoAlt} />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "content/pages/index.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const page = JSON.parse(fileContent);

  return { props: { page } };
}
