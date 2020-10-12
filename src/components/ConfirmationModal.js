import React from "react";
import { Link } from "react-router-dom";


function ConfirmationModal(props) {
    return(
        <div>
           <div className="modal">
  <div className="modal-dialog" role="document">
    <div className="modal-content"></div>
      <div className="modal-header">
        <h5 className="modal-title">Atenção!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Essa é uma ação irreversivel. Deseja realmente deletar?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Cancelar</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Confirmar</button> 
      </div>
    </div>
  </div>
</div> 
    );
}

export default ConfirmationModal;