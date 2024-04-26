import { IoMdClose } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Input = ({
  type,
  placeholder,
  width,
  onChange,
  name,
  value,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative flex flex-col gap-3 mx-auto"
      style={{ width: width }}
    >
      <input
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66 border-2"
        required
      />
    </div>
  );
};

const AddProject = ({ setAddProject, setProjects }) => {
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    deadline: "",
    managerEmail: "",
    coordinater: false,
    virtualRoom: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="fixed z-[99] top-0 left-0 right-0 bottom-0 overlay flex items-center justify-center ">
      <div className="w-[30%] py-10 bg-white shadow-md drop-shadow-md flex flex-col gap-5 p-7 rounded-[48px]">
        {created && (
          <div className="bg-white drop-shadow-md shadow-md gap-2 py-4 px-10 flex items-center justify-center">
            <FaCheckCircle className="text-mainColor " />
            <h4 className="text-mainColor font-bold text-sm">
              project has been created successfully
            </h4>
          </div>
        )}
        <div className="flex items-center justify-between">
          <h2 className="text-[2.2rem] capitalize font-bold text-Gray100">
            Add Project
          </h2>
          <IoMdClose
            className="text-2xl text-mainColor cursor-pointer"
            onClick={() => setAddProject(false)}
          />
        </div>
        <form
          className="flex flex-col gap-2 text-Gray100"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">Project name</p>
            <Input
              label="E-mail"
              placeholder="Project Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              width="100%"
              display={"none"}
              disabled={loading}
            />
          </div>

          <div className="flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">Deadline</p>

            <input
              className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66 border-2"
              type="date"
              name="deadline"
              onChange={handleChange}
            />
            <input
              className="w-[100%] h-[7vh] rounded-[24px] px-10 border-Gray66 border-2"
              type="date"
              name="deadline"
              id=""
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <div className="relative flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">Set Manager</p>
            <Input
              type="email"
              placeholder="Email Address"
              name="managerEmail"
              value={formData.manager}
              onChange={handleChange}
              width="100%"
              display={"none"}
              disabled={loading}
            />
            <h4 className="absolute right-[5%] bg-[#BFB7F133] px-2 py-1 rounded-md text-[#BFB7F1] top-[50%]">
              Manager
            </h4>
          </div>

          <div className="flex gap-[12px] flex-col w-[100%]">
            <p className="font-medium text-Typo">Features</p>
            <div className="flex items-center gap-4  justify-center">
              <div
                onClick={() =>
                  setFormData({
                    ...formData,
                    coordinater: !formData.coordinater,
                  })
                }
                className={`flex flex-col gap-2 border-2  w-[50%] cursor-pointer items-center p-2 rounded-md ${
                  formData.coordinater === true
                    ? "border-[#FBBC09] text-[#FBBC09]"
                    : "text-[#CECECE]"
                } duration-300 ease-in-out`}
              >
                <GiBrain className="text-5xl" />
                <h5 className="text-center text-sm">Intelligent Coordinator</h5>
              </div>
              <div
                onClick={() =>
                  setFormData({
                    ...formData,
                    virtualRoom: !formData.virtualRoom,
                  })
                }
                className={`flex flex-col gap-2 border-2 w-[50%] cursor-pointer items-center p-2 rounded-md ${
                  formData.virtualRoom === true
                    ? "border-[#66DC90] text-mainColor"
                    : "text-[#CECECE]"
                } duration-300 ease-in-out `}
              >
                <FaPeopleRoof className="text-5xl" />
                <h5 className=" text-center  text-sm">Virtual Room</h5>
              </div>
            </div>
          </div>

          <div className="w-full">
            <button className=" w-[100%] mx-auto h-[7vh] bg-mainColor rounded-[24px] text-white font-bold flex justify-center text-[1.5rem] items-center">
              {loading ? <div className="spinner "></div> : "Create"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
