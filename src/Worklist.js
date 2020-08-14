import React from "react";

const Worklist = (props) => {
  const { worklist, deleteWork } = props;
  const todolist =
    worklist.length > 0 ? (
      worklist.map((work) => {
        return (
          <div className='red collection-item' key={work.id}>
            <span> {work.body} </span>
            <button
              className='green right'
              onClick={() => {
                deleteWork(work.id);
              }}
            >
              {" "}
              Remove Todo{" "}
            </button>
          </div>
        );
      })
    ) : (
      <p className='center'> There is no todo remaining </p>
    );
  return (
    <div className='Todos collection'>
      {/* <p>hi</p> */}
      {todolist}
    </div>
  );
};

export default Worklist;
