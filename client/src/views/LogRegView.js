import React from 'react';
import LoginCmp from "../components/LoginCmp";
import RegisterCmp from "../components/RegisterCmp"; 

const LogRegView = (props) => {

    return (
        <main>
        <div className="row_flex_left">
            <LoginCmp />
        </div>
        <div className="row_flex_left">
            <RegisterCmp />
        </div>
    </main>
    )
}

export default LogRegView; 