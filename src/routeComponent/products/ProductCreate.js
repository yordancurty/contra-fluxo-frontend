import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import api from "../../apis/index";
import ProductForm from "./ProductForm";

function ProductCreate(){

/*  const { userId } = useParams(); */
 const history = useHistory();

 const [state, setState] = useState({
     title: "",
     description: "",
     specifications: "",
     user: "",
     artType: "default",
     subCategory: "default",
     media: "",
     price: 0,
 });

 useEffect(() => {
     if (state.mediaUrl) {
         handleSubmit(state);
     }
 }, [state]);

async function handleSubmit(data){

    try{

     const response = await api.post(`/product/5f85a96d89bec2111bdf35ce`, {...data});

     console.log(response)
     
     history.push(`/profile`)

    }catch(err){
        console.error(err);
    }
}

async function handleFileUpload(data) {
    try{
        const uploadData = new FormData();

        uploadData.append("media", data);

        const response = await api.post("/media-upload", uploadData);

        console.log(response.data.media);
    return response.data.media;

    } catch(err){
        console.error(err);
    }
}
    

return (
        <div>
            <h1 className="h1-product-form">Adicione aqui sua arte:</h1>
            <hr className="hr-product-form"></hr>
            <ProductForm 
                handleSubmit={handleSubmit}
                handleFileUpload={handleFileUpload}
                setState={setState}
                state={state}
            />
        </div>
    );
};

export default ProductCreate;