import React from "react";
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
