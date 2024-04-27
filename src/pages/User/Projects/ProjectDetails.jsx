import React, { useEffect, useState } from "react";
import SingleProject from "../../../components/User/Project/SingleProject";
import Layout from "../../../components/Layout";
import API from "../../../utils/api-client";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get("projects/"+id+"/");
                setProject(response.data.project);
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
            <SingleProject project={project} />
        </Layout>
    );
};

export default ProjectDetails;
