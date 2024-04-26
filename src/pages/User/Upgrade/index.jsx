import React from "react";
import Prices from "../../../components/User/Upgrade/Prices";
import Layout from "../../../components/Layout";

const Upgrade = () => {
  return (
    <Layout isLoading={false}>
      <Prices />
    </Layout>
  );
};

export default Upgrade;
