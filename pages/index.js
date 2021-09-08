import Head from 'next/head';
import Layout from '../layouts/layout';
import Header from '../components/Header';
import Statistic from '../components/Statistic';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Official website | Earthcorp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Statistic/>
    </Layout>
  );
};