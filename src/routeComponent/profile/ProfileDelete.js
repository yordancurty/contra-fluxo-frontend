import React from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../apis/index";
import LoadingSpinner from "../../components/LoadingSpinner";

const ProfileDelete = (props) => {
    const { id } = useParams();
    const history = useHistory();

    async function handleClick() {
        try{
        
            const response = await api.delete(`/profile/${id}`);
            localStorage.removeItem("loggedInUser");
            props.setUser({});

            console.log(response);
            
            history.push("/");

        } catch(err) {
          console.error(err);
        }
    };

    return (
        <div>
 <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Deletar conta
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" onClick={() => history.push("/")}>
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            Você tem certeza que deseja deletar sua conta?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => history.push("/")}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClick}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
{/*  <LoadingSpinner /> */}
        </div>
    )
};

export default ProfileDelete;