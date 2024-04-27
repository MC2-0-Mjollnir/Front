import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectCard = ({ project }) => {
  const copyClipboard = (id) => () => {
    navigator.clipboard.writeText(id);
    toast.success("Copied to clipboard", {
      position: "top-center",
      autoClose: 5000,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/user/projects/'+project._id)} className="w-[25rem] h-full transition-all border-mainColor border-2 p-5 bg-white">
      <div className="flex items-center justify-between text-xs">
        <span className="text-xs">{DateTime.fromISO(project.createdAt).toFormat('dd/MM/yyyy HH:mm')}</span>
        <span className="text-red-500 px-3 py-2 border bg-black" onClick={deleteProject}>Delete</span>
      </div>
      <h2 className="text-xl font-unbounded leading-6 font-bold mt-4">{project.title}</h2>
      <p className="text-sm text-gray-500 mt-4 break-words pb-3">{project.description}</p>
      <button className="flex hover:translate-y-1 transition-all gap-1 items-center text-sm px-3 mt-2 py-2 border-2 border-black" onClick={copyClipboard(project._id)}>
        <img src="/images/User/copy.svg" className="h-6 w-6" alt="Copy" />
        copy code
      </button>
    </div>
  );
};

export default ProjectCard;
