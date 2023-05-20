import React, { useEffect } from "react";

const Profile = () => {
    useEffect(()=>{
        console.log(document.cookies);
    },[])
  return <div>Profile</div>;
};

export default Profile;
