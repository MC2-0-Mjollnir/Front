import React from "react";
import UserLayout from "../../../components/User/UserLayout";
import Prices from "../../../components/User/Upgrade/Prices";

const Upgrade = () => {
  return (
    <UserLayout isLoading={false}>
      <Prices />
    </UserLayout>
  );
};

export default Upgrade;
