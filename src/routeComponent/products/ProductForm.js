import React from "react";

function ProductForm(props) {
  function handleChange(event) {
    props.setProduct({
      ...props.product,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <div>
      
      <form>
        <div className="form-group">
          <label htmlFor="profileEditNameInput">Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="productTitleInput"
            placeholder="Insira o titulo da sua arte!"
            value={props.product.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescriptionInput">Descrição:</label>
          <textarea
            type="text"
            name="description"
            className="form-control"
            id="productDescriptionInput"
            placeholder="Sua arte merece uma descrição!"
            value={props.product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productSpecificationInput">Fale mais sobre seu produto:</label>
          <textarea
            className="form-control"
            name="specification"
            type="text"
            id="productSpecificationInput"
            rows="3"
            value={props.product.specification}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                name="media"
                className="custom-file-input"
                id="productMediaInput"
                value={props.product.media}
                onChange={handleChange}
              />
              <label
                htmlFor="productMediaInput"
                className="custom-file-label"
              >
                Choose file
              </label>
            </div>
            <div className="input-group-append" />
            <span className="input-group-text" id="productMediaInput">
              Upload
            </span>
          </div>
        </div>
        <div class="form-group">
    <select class="custom-select">
      <option selected="">Que tipo de artista você é?</option>
      <option value={props.product.artType}>Artes literárias</option>
      <option value={props.product.artType}>Audiovisual</option>
      <option value={props.product.artType}>Artes visuas</option>
      <option value={props.product.artType}>Artesanato</option>
    </select>
  </div>
        <button type="submit" className="btn btn-dark">
          Confirmar Alterações
        </button>

      </form>
    </div>
  );
}

export default ProductForm;

/* title: String,
description: String,
price: Number,
specifications: String,
evaluation: String,
user: { type: Schema.Types.ObjectId, ref: "User" },
artType: { type: String, enum: ["Artes Literárias", "Audiovisual", "Artes Visuais", "Artesanato"] }, ---> select com as opções
media: String ---> tipo file*/
