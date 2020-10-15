import React from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/index";

const DeleteProject = () => {
    const { id } = useParams();
    const history = useHistory();
  
    async function handleClick() {
      try {
        const result = await api.delete(`/${id}`);
  
        history.push("/profile");
      } catch (err) {
        console.error(err);
      }
    }
  
  };
  
  export default DeleteProject;