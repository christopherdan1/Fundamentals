import React, { useEffect, useState } from "react";
import axios from "axios";

//get a random user from a random api and display using React (Hooks)

const getrandomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(({ data }) => {
      //handle success
      console.log(data);
      return JSON.stringify(data, null, 2);
    })
    .catch((err) => {
      //handle error
      console.error(err);
    });
};

function api_interview() {
  const [randomJSON, setRandomJSON] = useState("");

  useEffect(() => {
    getrandomData().then((x) => {
      setRandomJSON(x || "No user data found");
    });
  }, []);

  return (
    <div>
      <pre>{randomJSON}</pre>
    </div>
  );
}

export default api_interview;
