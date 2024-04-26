import React from "react";
import SupportContent from "../../../components/User/Support/SupportContent";
import FrequentlyAskedQuestions from "../../../components/User/Support/FrequentlyAskedQuestions";
import Layout from "../../../components/Layout";

const Support = () => {
  return (
    <Layout isLoading={false}>
      <div className="flex flex-col">
        <SupportContent />
        <FrequentlyAskedQuestions />
      </div>
    </Layout>
  );
};

export default Support;
