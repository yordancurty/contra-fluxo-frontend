import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../apis/index";

const ProductEdit = () => {

    const history = useHistory();
    const { id } = useParams();

    const [product, setProduct] = useState({
        title: "",
        description: "",
        specifications: "",
        user: "",
        artType: ["Artes Literárias", "Audiovisual", "Artes Visuais", "Artesanato"],
        media: "",
    });

    useEffect(() => {
        (async function fetchProject() {
        const result = await api.get(`product`);

        setProduct({ ...result.data[0] });
        })();
    }, []);

    async function handleSubmit(data) {
        try {
        // Colocando uma string em branco como URL, pois os dados que queremos inserir via POST sao sempre o segundo parametro do metodo "post" do Axios
        const result = await api.patch(`/product/${id}`, data);

        // Redirecionar de volta para lista de Projetos
        history.push("/");
        } catch (err) {
        console.error(err);
        }
    }

    return (
        <div>
            <h1>Edit Project {product.title}</h1>
            <hr></hr>
            <ProductForm
                handleSubmit={handleSubmit}
                product={product}
                setProduct={setProduct}
            />
        </div>
    )
}

export default ProductEdit;