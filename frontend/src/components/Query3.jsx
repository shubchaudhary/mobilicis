import React, { useState, useEffect } from "react";
import axios from "axios";
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const QueryThree = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/users/query3", {
                withCredentials: true,
                headers: headers,
            })
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        First Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Income
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        City
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Car
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quote
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone Price
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.first_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.last_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.gender}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.income}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.city}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.car}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.quote}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.phone_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default QueryThree;
