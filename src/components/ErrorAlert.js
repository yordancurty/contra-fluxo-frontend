import React from "react";


function ErrorAlert(props) {
    return (
    <div className="alert alert-dismissible alert-danger">
    {props.error}
    </div>
    );
}

export default ErrorAlert;