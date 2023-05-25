import React, { useEffect } from "react";
import axios from "axios";

const url = "http://localhost:8080"
// const url = "https://clever-mite-overcoat.cyclic.app"

const Profile = () => {
  console.log("Hello")
  const getTasks = async () => {
    try {
      console.log("Heelo")
      axios.defaults.withCredentials = true;
      let data = await axios.get(
        `${url}/task/all`
      );
      // alert("Got the tasks");
      console.log(data);
    } catch (error) {
      alert(error?.response?.data?.error?.message);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
