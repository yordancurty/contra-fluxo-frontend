import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../apis/index";
import ProductForm from "./ProductForm";

const ProductEdit = (props) => {

    const history = useHistory();
    const { _id } = props.loggedInUser;

    const [state, setState] = useState({
        title: "",
        description: "",
        specifications: "",
        user: "",
        artType: "",
        subCategory: "",
        media: "",
        price: 0,
    });

    useEffect(() => {
        if (state.mediaUrl) {
            handleSubmit(state);
        }
    }, [state]);

    useEffect(() => {
        (async function fetchProduct() {
        const result = await api.get(`/product/${_id}`, state);

        setState({ ...result.data[0] });
        })();
    }, []);

    async function handleSubmit(data) {
        try {
        
        const result = await api.patch(`/product/${_id}`, data);

        history.push("/");
        } catch (err) {
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
            <h1 className="h1-product-edit-form">Edite aqui o seu Produto: </h1>
            <hr className="hr-product-form"></hr>
            <ProductForm
                handleSubmit={handleSubmit}
                handleFileUpload={handleFileUpload}
                state={state}
                setState={setState}
            />
        </div>
    )
}

export default ProductEdit;





