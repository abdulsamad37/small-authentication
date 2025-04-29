import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Profile = () => {

    const navigate = useNavigate()

    const getProfileData = () => {
        const token = JSON.parse(localStorage.getItem("token"));

        axios
            .get("https://api.escuelajs.co/api/v1/auth/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                console.log("Profile data", res);
                navigate("/userdata", { state: res.data });
            })
            .catch((err) => {
                console.log("Error occured", err);
            });
    };

    return (
        <div>
            <p>This is profile page</p>
            <button className="btn btn-success me-2" onClick={getProfileData}>Get Profile Data</button>
            {/* <button className="btn btn-danger" onClick={handleLogOut}>Logout</button> */}
        </div>
    );
};

export default Profile;
