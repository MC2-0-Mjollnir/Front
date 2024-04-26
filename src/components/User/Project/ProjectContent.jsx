import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import AddProject from "./AddProject";

const ProjectsContent = ({ projects }) => {
  const [addProject, setAddProject] = useState(false);

  return (
    <section className="w-screen min-h-screen  flex flex-col  gap-[5vh] ">
      {/* {JSON.stringify(projects)} */}
      <div className="flex items-center justify-between px-[10vw]">
        <h2 className="text-[2.5rem] font-bold text-Typo">My Projects</h2>
        <button
          className="bg-mainColor text-white font-semibold px-[24px] py-[16px] rounded-[12px]"
          onClick={() => setAddProject(true)}
        >
          Add project
        </button>
      </div>
      <div className="flex min-h-screen items-center w-[80vw] mx-auto justify-between flex-wrap gap-y-16">
        <div className=" w-full h-[50vh] text-2xl capitalize font-bold">
          {projects.length === 0 ? (
            <h2 className="text-center">there are no projects</h2>
          ) : (
            <div className="flex items-center justify-center flex-wrap gap-6">
              {projects?.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
      {addProject && (
        <AddProject
          projects={projects}
          setProjects={setProjects}
          setAddProject={setAddProject}
        />
      )}
    </section>
  );
};

export default ProjectsContent;
