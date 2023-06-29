import React from "react";
import JobDuties from "./JobDuties";

const JobInfo = ({ jobs, currentItem }) => {
  const { company, dates, title, duties } = jobs[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <div className="job-desc"></div>
      <JobDuties duties={duties} />
    </article>
  );
};

export default JobInfo;
