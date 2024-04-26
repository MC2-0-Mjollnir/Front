import React from "react";
import UserLayout from "../../../components/User/UserLayout";
import ProjectsContent from "../../../components/User/Project/ProjectContent";
import Layout from "../../../components/Layout";

const Projects = () => {
  return (
    <Layout isLoading={false}>
      <ProjectsContent />
    </Layout>
  );
};

export default Projects;
