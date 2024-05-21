import React from "react";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";
import Layout from "./Layout";
import { styled } from 'styled-components';
import { Link } from "react-router-dom";

const Wrapper1 = styled.div`
    justify-content: center;
    margin-left: 35%
`;


const Home = () => {
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users?page=1&per_page=9`)
            .then((res) => {
                setUserInfo(res.data.data);
            })
            .catch((e)=> {
                console.log(e);
            });
    },[]);

    return (
        <div>
            <Wrapper1>
                <h1>Home Page</h1>
            </Wrapper1>
            <Layout>
                {userInfo.map(users => (
                    <Card
                        key={users.id}
                        id={users.id}
                        img={users.avatar}
                        name={`${users.first_name} ${users.last_name}`}
                    />
                ))}
            </Layout>
            <Wrapper1>
                <Link to="/menu">메뉴 페이지로 고고</Link>
            </Wrapper1>
        </div>
    );
};

export default Home;

