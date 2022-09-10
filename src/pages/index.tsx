import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

const Overview = dynamic(() => import("features/overview"), { ssr: false });

const Home: NextPage = () => {
  return (
    <Layout head={{ title: "trade log v1", description: "trading journey" }}>
      <Overview />
    </Layout>
  );
};

export default Home;
