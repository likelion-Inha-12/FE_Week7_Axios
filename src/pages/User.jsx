import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";


const User = () => {
    const {userId} = useParams();
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${userId}`)
            .then((res) => {
                setUserInfo(res.data.data);
            })
            .catch((e)=> {
                console.log(e);
            });
    }, [userId]);

    return(
        <>
            <h1>User Information</h1>
            <img src={userInfo.avatar} alt="img"/>
            <h3>
                {userInfo.first_name} {userInfo.last_name}
            </h3>
            <h3>email : {userInfo.email}</h3>
        </>
    );
};

export default User;