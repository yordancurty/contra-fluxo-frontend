
import React from "react";
import { useParams, useHistory } from "react-router-dom";

import projectsApi from "../../apis/index"; //conferirPath********

const DeleteProject = () => {
    const { id } = useParams();
    const history = useHistory();
  
    async function handleClick() {
      try {
        const result = await projectsApi.delete(`/${id}`);
  
        history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
  
  };
  
  export default DeleteProject;