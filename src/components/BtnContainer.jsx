import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        const { id, company } = item;
        return (
          <button
            className={`job-btn ${index === currentItem ? "active-btn" : ""}`}
            key={id}
            onClick={() => setCurrentItem(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
