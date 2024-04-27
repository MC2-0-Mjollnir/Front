import React, { useEffect, useState } from "react";
import ProjectsContent from "../../../components/User/Project/ProjectContent";
import Layout from "../../../components/Layout";
import API from "../../../utils/api-client";
import { toast } from "react-toastify";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await API.get("projects/");
        setProjects(response.data.projects);
      } catch (error) {
        toast.error(error?.response?.message ?? "Error", {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <ProjectsContent projects={projects} />
    </Layout>
  );
};

export default Projects;
