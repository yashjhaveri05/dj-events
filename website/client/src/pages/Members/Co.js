import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayMembers1 from "../../components/Members/DisplayMembers1";

const Core = () => {
  const [co, setCo] = useState([]);
  var x = localStorage.getItem("id");
  var data = "";
  var token = localStorage.getItem("Token");
  var config = {
    method: "get",
    url:
      "http://aryan123456.pythonanywhere.com/api/get_co_committee_members/" + x,
    headers: {
      Authorization: "Token " + token,
    },
    data: data,
  };
  useEffect(() => {
    axios(config)
      .then((response) => setCo(response.data))
      .catch((err) => console.error(err));
  }, [co]);

  return (
    <div>
      {co.map((x) => (
        <DisplayMembers1
          key={x.id}
          id={x.id}
          name={x.student}
          positionAssigned={x.positionAssigned}
        />
      ))}
    </div>
  );
};

export default Core;