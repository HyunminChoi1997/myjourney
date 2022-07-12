import React from "react";
import Layout from "../components/layout/Layout";
import InterviewList from "../components/interview/InterviewList";

function Interview() {
  const currURL = window.location.href.split("/");
  const endpoint = currURL[currURL.length - 1];
  return (
    <Layout>
      <InterviewList subject={endpoint} />
    </Layout>
  );
}
export default Interview;
