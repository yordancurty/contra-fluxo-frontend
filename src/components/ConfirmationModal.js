import React from "react";
import { Link } from "react-router-dom";

function ConfirmationModal(props) {
    return(
        <div className="modal">
           <div className={`fade ${props.show ? "modal show" : ""}`}
                id={props.id}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content"></div>
      <div className="modal-header">
        <h5 className="modal-title" id={`${props.id}Label`}>Atenção!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.handleClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Essa é uma ação irreversivel. Deseja realmente deletar?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={props.handleClose}>Cancelar</button>
        <Link className="btn btn-danger"  to={`/profile/delete/${props.profile}`}>Confirmar</Link> 
      </div>
    </div>
  </div>
</div> 
    );
}

export default ConfirmationModal;