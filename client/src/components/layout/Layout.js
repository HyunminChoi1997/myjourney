import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ContentBox } from "./styles";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
