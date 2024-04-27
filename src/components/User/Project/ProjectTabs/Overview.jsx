import { FrappeGantt } from "frappe-gantt-react";
import { useState } from "react";

const Overview = ({ project, tasks, setTasks, isLoading, setIsLoading }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full m-10">
      <div className="w-[80vw]">
        {isLoading ? (
          <div>loading ...</div>
        ) : tasks.length <= 0 ? (
          <>we are awaiting for your search</>
        ) : (
          <FrappeGantt
            customPopupHTML={() => {
              return <div>test</div>;
            }}
            tasks={tasks}
            viewMode={"Month"}
            onClick={(task) => console.log(task)}
            onTasksChange={(e) => console.log(e)}
          />
        )}
      </div>
    </div>
  );
};

export default Overview;
