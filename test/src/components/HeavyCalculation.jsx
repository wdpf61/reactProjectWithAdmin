import React, { useEffect, useState, useMemo } from "react";

import axios from "axios";

function HeavyCalculation() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [name, setName] = useState("");

    // 1️⃣ Fetch API
    useEffect(() => {
        axios({
              url:"https://jsonplaceholder.typicode.com/users",
              method:"GET",
              data:{}
        
         })
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => console.log(err)
             );
    }, []);

    const filteredUsers = useMemo(() => {
        console.log("use Memo rendered");
        return users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) );
    }, [users, search]);
     
    // console.log("rendered");
    // const filteredUsers = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) );

    return (
        <div className="container mt-4">
            <h3 className="mb-3">User List (Search with useMemo)</h3>

            {/* Search Input */}
            <div className="col-md-12 mb-3 d-flex">
            <input
                type="text"
                className="form-control"
                placeholder="Search user by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
             <button className="btn btn-primary" >Search</button>
            </div>

               <div className="col-md-12 mb-3 ">
                <h1> Create User</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Search user by name..."
               
                onChange={(e) => {setName(e.target.value)}}
            />
             <button className="btn btn-primary" >Search</button>
            </div>

            {/* Bootstrap Table */}
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}

                    {filteredUsers.length === 0 && (
                        <tr>
                            <td colSpan="3" className="text-center text-danger">
                                No user found!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default HeavyCalculation;
