import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../apis/index";
import ProductForm from "./ProductForm";

const ProductEdit = (props) => {

    const history = useHistory();
    const { id } = useParams();

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
        console.log("STATE" ,state)
        if (state.mediaUrl) {
            handleSubmit(state);
        }
    }, [state]);

    useEffect(() => {
        (async function fetchProduct() {
        const result = await api.get(`/product/${id}`);

        setState({ ...result.data });
        })();
    }, []);

    async function handleSubmit(event) {

        try {
            event.preventDefault();
        
        const result = await api.patch(`/product/${id}`, state);

        history.push("/profile");
        } catch (err) {
        console.error(err);
        }
    }

    function handleChange(event) {
        setState({...state, [ event.currentTarget.name ]: event.currentTarget.value})
    }


    async function handleFileUpload(data) {
        try{
            const uploadData = new FormData();
    
            uploadData.append("media", data);
    
            const response = await api.post("/media-upload", uploadData);
    
            //console.log(response.data.media);
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
                handleChange={handleChange}
                handleFileUpload={handleFileUpload}
                state={state}
                setState={setState}
            />
        </div>
    )
}

export default ProductEdit;





