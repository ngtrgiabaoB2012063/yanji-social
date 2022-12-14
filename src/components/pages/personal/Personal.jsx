import React from "react";

import Body from "./body/Body";
import GeneralInfo from "./header/genralInfo/GeneralInfo";
import Header from "./header/Header";
import MenuProfile from "./menuProfile/MenuProfile";

import "./personnal.css";

function Personal() {
    return (
        <>
            <div className="personal-container">
                <Header />
                <GeneralInfo />

                <hr className="my-5" />

                <MenuProfile />
                <Body />
            </div>
        </>
    );
}

export default Personal;