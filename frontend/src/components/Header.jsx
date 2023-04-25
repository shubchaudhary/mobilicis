import React, { useState } from "react";
import QueryOne from "./Query1";
import QueryTwo from "./Query2";
import QueryThree from "./Query3";
import QueryFour from "./Query4";
import QueryFive from "./Query5";

function Header() {
    const [activeComponent, setActiveComponent] = useState("QueryOne");

    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case "QueryOne":
                return <QueryOne />;
            case "QueryTwo":
                return <QueryTwo />;
            case "QueryThree":
                return <QueryThree />;
            case "QueryFour":
                return <QueryFour />;
            case "QueryFive":
                return <QueryFive />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-800 px-8 py-4">
            <div className="flex space-x-4 mb-8 text-gray-200">
                <button
                    className={`${
                        activeComponent === "QueryOne" ? "bg-gray-700" : "hover:bg-gray-700"
                    } px-10 py-4 text-white font-bold bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick("QueryOne")}
                >
                    Query-1
                </button>
                <button
                    className={`${
                        activeComponent === "QueryTwo" ? "bg-gray-700" : "hover:bg-gray-700"
                    } px-10 py-4 text-white font-bold bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick("QueryTwo")}
                >
                    Query-2
                </button>
                <button
                    className={`${
                        activeComponent === "QueryThree" ? "bg-gray-700" : "hover:bg-gray-700"
                    } px-10 py-4 text-white font-bold bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick("QueryThree")}
                >
                    Query-3
                </button>
                <button
                    className={`${
                        activeComponent === "QueryFour" ? "bg-gray-700" : "hover:bg-gray-700"
                    } px-10 py-4 text-white font-bold bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick("QueryFour")}
                >
                    Query-4
                </button>
                <button
                    className={`${
                        activeComponent === "QueryFive" ? "bg-gray-700" : "hover:bg-gray-700"
                    } px-10 py-4 text-white font-bold bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick("QueryFive")}
                >
                    Query-5
                </button>
            </div>
            <div className="overflow-x-auto">{renderActiveComponent()}</div>
        </div>
    );
}

export default Header;
