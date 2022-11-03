import React, { useEffect, useState } from "react";
import axios from 'axios'

export function GithubUser({ username = 'Giacomino02' }) {
    const url = `https://api.github.com/users/${username}`
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            axios
                .get(url)
                .then((response) => {
                    setData(response.data);
                    console.log(response);
                })
                .catch((error) => {
                    setError(error);
                });
        },
        [username]
    );

    if (error) return `Error: ${error.message}`;
    return (
        <>
            <img src={data.avatar_url} alt='user' className="avatar-profile" />
            <h2>{data.name}</h2>
            <a src={data.html_url}>link</a>
        </>
    )
}