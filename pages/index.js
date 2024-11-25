// pages/index.js
import Head from 'next/head';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export default function Home({ data, content }) {
  return (
    <>
      <Head>
        <title>My Static Site</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta property="og:description" content="This is a sample static site using Next.js." />
      </Head>
      <h1>Welcome to My Static Site</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      data,
      content,
    },
  };
}
