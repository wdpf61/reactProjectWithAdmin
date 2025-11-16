import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            axios({
                url: "http://nuruzzaman.intelsofts.com/php/api/customer",
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
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <th scope="row">{++i}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}


                </tbody>
            </table>


        </>
    )
}

export default UserList