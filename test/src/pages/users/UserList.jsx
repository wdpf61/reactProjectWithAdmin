import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            axios({
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
                data: {}
            })
                .then((res) => {
                    console.log(res.data);
                    setUsers(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }, []);

    return (
        <>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <th scope="row">{++i}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}


                </tbody>
            </table>


        </>
    )
}

export default UserList