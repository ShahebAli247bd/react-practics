import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const HiddenSearch = () => {
    const [show, setShow] = useState(false);
    const [theme, setTheme] = useState("light");
    const handleSearchClick = () => {
        setShow(true);
        setTheme("dark");
    };
    const handleClick = (e) => {
        if (e.target.className.toString().includes("container")) {
            setTheme("light");
            setShow(false);
        }
    };
    return (
        <div
            onClick={handleClick}
            className={`${
                theme == "dark" ? "bg-slate-700 text-slate-700" : ""
            } container flex justify-center items-center h-screen text-3xl`}
        >
            {show ? (
                <input type="text" className="border-b outline-none text-2xl" />
            ) : (
                <BiSearch onClick={handleSearchClick} />
            )}
        </div>
    );
};

export default HiddenSearch;
