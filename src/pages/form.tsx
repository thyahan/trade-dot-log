import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

const Button = dynamic(() => import("components/Button"), { ssr: false });

const Form: NextPage = () => {
  return (
    <Layout head={{ title: "trade log v1", description: "trading journey" }}>
      Form herer
      <Button className="bg-red-600">Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
      <Button>Hello</Button>
    </Layout>
  );
};

export default Form;
