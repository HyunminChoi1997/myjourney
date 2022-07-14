import React from "react";
import Layout from "../components/layout/Layout";
import { Background } from "./styles";
import siromiro from "../images/siromiro.jpg";

function Home() {
  return (
    <Layout>
      <Background url={siromiro}>
        <h1></h1>
        <h1></h1>
        <h1>안녕하세요</h1>
        <h1>WELCOME</h1>
        <h1>{process.env.REACT_APP_SERVER_URL}</h1>
      </Background>
    </Layout>
  );
}
export default Home;
