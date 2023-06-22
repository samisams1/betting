import React, { useState, useEffect, Fragment } from "react";

const Result = result => {
  if (result === 0) {
    return "W";
  } else if (result === 1) {
    return "D";
  } else if (result === 2) {
    return "L";
  } else {
    return "-";
  }
};

const TeamForm = ({ team, form }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(form.filter(a => a.name === team));
  }, [team, form]);

  return (
    <Fragment>
      {data.length >= 1 && (
        <span>
          {data[0].form.map((a, index) => (
            <span key={index}>{Result(a)}</span>
          ))}
        </span>
      )}
    </Fragment>
  );
};

export default TeamForm;
