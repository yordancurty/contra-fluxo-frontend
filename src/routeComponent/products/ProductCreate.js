import React, {useState} from 'react';
import api from "../../apis/index";
import ProductForm from "./ProductForm";

function ProductCreate(){

 const [state, setState] = useState({
     title: "",
     description: "",
     specifications: "",
     user: "",
     artType: ["Artes Literárias", "Audiovisual", "Artes Visuais", "Artesanato"],
     media: "",
 });

 const handleChange = (event) => {
     setState({
         ...state, [event.current.name]: event.currentTarget.value,
     });
 };

 const handleSubmit = async (event) => {
     setState({...state});

     try{

        event.preventDefault();

        const {userId} = props.match.params;

        const response = await api.post(`http://localhost:4000/api/product/${userId}`, state);
        
        console.log(response);

        history.push("/profile")

     } catch(err){
         setState({...state});
     }
 }

    return (
        <div>Product Create</div>
    )
}

export default ProductCreate;