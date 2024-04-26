import React from "react";
import UserLayout from "../../../components/User/UserLayout";
import SupportContent from "../../../components/User/Support/SupportContent";
import FrequentlyAskedQuestions from "../../../components/User/Support/FrequentlyAskedQuestions";
import UserSupportLayout from "../../../components/User/Support/UserSupportLayer";
import Navbar from "../../../components/User/Navbar";

const Support = () => {
  return (
    <UserLayout isLoading={false}>
      <div className="flex flex-col">
        <SupportContent />
        <FrequentlyAskedQuestions />
      </div>
    </UserLayout>
  );
};

export default Support;
