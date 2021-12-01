import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>johndsloan | {page}</title>
    </Head>
  );
};

export default PageHead;
