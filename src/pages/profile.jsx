import React, { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const getTasks = async () => {
    try {
      let { data } = await axios.get(
        "https://clever-mite-overcoat.cyclic.app/task/all"
      );
      alert("Got the tasks");
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
