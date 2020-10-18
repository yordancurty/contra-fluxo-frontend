import React from "react";

function LoadingSpinner() {
    return(
        <div>
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default LoadingSpinner;