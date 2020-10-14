import React, {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";
import api from "../../apis/index";
import ProductForm from "./ProductForm";

function ProductCreate(){

 const { userId } = useParams();
 const history = useHistory();

 const [state, setState] = useState({
     title: "",
     description: "",
     specifications: "",
     user: "",
     artType: ["Artes Literárias", "Audiovisual", "Artes Visuais", "Artesanato"],
     subCategory: ["HQ", "Romance", "Poesia", "Biografia", "Fantasia", "Ficção", "Documentario", "Filmes", "Curtas", "Animação", "Pintura", "Escultura", "Desenho", "Macramê", "Crochet", "Tricot", "Cerâmica"],
     media: "",
 });

async function handleSubmit(data){
    try{

     const response = await api.post(`/product/${userId}`, {...data});
     
     history.push(`/profile/${userId}`)

    }catch(err){
        console.error(err);
    }
}
    

return (
        <div>
            <h1>Adicione aqui sua arte:</h1>
            <hr></hr>
            <ProductForm 
                handleSubmit={handleSubmit}
                setState={setState}
                state={state}
            />
        </div>
    );
};

export default ProductCreate;