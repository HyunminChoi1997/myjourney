import React from "react";
import Layout from "../components/layout/Layout";
import { Background } from "./styles";
import siromiro from "../pics/siromiro.jpg";

function Home() {
  return (
    <Layout>
      <Background url={siromiro} />
    </Layout>
  );
}
export default Home;
