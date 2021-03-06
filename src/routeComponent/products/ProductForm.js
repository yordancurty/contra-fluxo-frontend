import React from "react";

const subCategoryList = [
  "HQ",
  "Romance",
  "Poesia",
  "Biografia",
  "Fantasia",
  "Ficção",
  "Documentario",
  "Filmes",
  "Curtas",
  "Animação",
  "Pintura",
  "Escultura",
  "Desenho",
  "Macramê",
  "Crochet",
  "Tricot",
  "Cerâmica",
];

function ProductForm(props) {
  const { handleSubmit, handleChange, state } = props;
  // function handleChange(event) {
  //   if (event.currentTarget.files) {
  //     return setState({
  //       ...props.state,
  //       [event.currentTarget.name]: event.currentTarget.files[0],
  //     });
  //   }
  //   props.setState({
  //     ...props.state,
  //     [event.currentTarget.name]: event.currentTarget.value,
  //   });
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const mediaUrl = await props.handleFileUpload(props.state.media);

  //   props.setState({ ...props.state, mediaUrl });
  // }

  return (
    <div className="product-form-box">
      <div className="product-form-container">
        <form className="form-product-main" onSubmit={handleSubmit}>
          <div className="form-product form-group">
            <label htmlFor="productTitleInput">Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="productTitleInput"
              placeholder="Insira o titulo da sua arte!"
              value={state.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-product form-group">
            <label htmlFor="productDescriptionInput">Descrição:</label>
            <textarea
              type="text"
              name="description"
              className="form-control"
              id="productDescriptionInput"
              placeholder="Sua arte merece uma descrição!"
              value={state.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-product form-group">
            <label htmlFor="productSpecificationInput">
              Fale mais sobre seu produto:
            </label>
            <textarea
              className="form-control"
              name="specification"
              type="text"
              id="productSpecificationInput"
              rows="3"
              placeholder="Escreva suas especificações"
              value={state.specification}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-product form-group">
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  name="media"
                  className="custom-file-input"
                  id="productMediaInput"
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
          <div className="form-product form-group">
            <label className="control-label">Quanto vale a sua arte?</label>
            <div className="from-product form-group">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">R$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  name="price"
                  id="productPriceInput"
                  value={state.price}
                  onChange={handleChange}
                  placeholder="00"
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="select-form-product d-flex">
            <div className="form-product form-group">
              <select
                onChange={handleChange}
                name="artType"
                className="custom-select"
                value={state.artType}
                required={true}
              >
                <option disabled value="default">
                  Que tipo de artista você é?
                </option>
                <option value="Artes Literárias">Artes Literárias</option>
                <option value="Audiovisual">Audiovisual</option>
                <option value="Artes Visuais">Artes Visuais</option>
                <option value="Artesanato">Artesanato</option>
              </select>
            </div>
            <div className="form-product form-group">
              <select
                onChange={handleChange}
                value={state.subCategory}
                name="subCategory"
                className="custom-select ml-2"
                required={true}
              >
                <option disabled value="default">
                  Qual é a subcategoria?
                </option>
                {subCategoryList.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-form-product btn btn-dark">
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
