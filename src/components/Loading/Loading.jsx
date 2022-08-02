import React from "react";
import "./Loading.css"


const Loading = (props) => {


    return (
        <div className={props.isLoad ? "spin-wrapper active" : "spin-wrapper"}>
            <div className="spinner">
            </div>
        </div>

    );
}

export default Loading;