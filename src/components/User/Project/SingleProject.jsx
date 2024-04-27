import { useState } from "react"
import Overview from "./ProjectTabs/Overview"
import RealTimeTraking from "./ProjectTabs/RealTimeTraking"
import InterlligentForecasting from "./ProjectTabs/InterlligentForecasting"

const SingleProject = ({ project }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="flex flex-col gap-5 w-full justify-center items-center mb-5">
            <h2 className="font-unbounded font-bold text-3xl">{project?.title}</h2>
            <div className="flex flex-col w-[85%]">
                <div className="font-unbounded flex items-center gap-4 flex-wrap">
                    {
                        ["Overview", "Real Time Traking", "Interlligent forecasting"].map((item, index) => (
                            <div key={index} className={`cursor-pointer ${currentIndex === index ? "bg-mainColor text-white border border-black" : "bg-white text-black"} px-4 transition-all py-2`} onClick={() => setCurrentIndex(index)}>{item}</div>
                        ))
                    }
                </div>
                <div className="min-h-[80vh] flex border-2 border-black bg-white">
                    {
                        (currentIndex === 0)
                        ?
                        <Overview />
                        :
                        (currentIndex === 1)
                        ?
                        <RealTimeTraking localisation={project?.localisation} />
                        :
                        <InterlligentForecasting />
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleProject