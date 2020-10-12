import React from "react";

function LoadingButton() {
    return (
        <div>
            <button className="btn btn-warning" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    );
}

export default LoadingButton;