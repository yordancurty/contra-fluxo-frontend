/* import React from 'react';

function ProductForm(){
    return (
       
            <div>
                <form>
         <legend>Edite seu perfil</legend>
         <div className="form-group">
           <label htmlFor="profileEditNameInput">Name:</label>
           <input type="text" name="name" className="form-control" id="profileEditNameInput" placeholder="Insira seu nome" value={edit.name} onChange={handleChange} />
         </div>
         <div className="form-group">
           <label htmlFor="profileEditEmailInput">Email:</label>
           <input type="email" name="email" className="form-control" id="profileEditEmailInput" aria-describedby="emailHelp" placeholder="Enter email" value={edit.email} onChange={handleChange} />
           <small id="emailHelp" className="form-text text-muted">Nunca compartilhe seu email com alguém.</small>
         </div>
         <div className="form-group">
           <label htmlFor="profileEditAboutMeInput">Fale mais sobre você:</label>
           <textarea className="form-control" name="aboutMe" type="text" id="profileEditAboutMeInput" rows="3" value={edit.aboutMe} onChange={handleChange}></textarea>
         </div>
         <div className="form-group">
           <label htmlFor="profileEditFacebookInput">Inclua suas redes sociais aqui também:</label>
           <input type="text" name="facebook" className="form-control" id="profileEditFacebookInput" placeholder="Insira o link do facebook" value={edit.facebook} onChange={handleChange} />
           <label htmlFor="profileInstagramInput"></label>
           <input type="text" name="instagram" className="form-control" id="profileInstagramInput" placeholder="Insira o link do instagram" value={edit.instagram} onChange={handleChange} />
           <label htmlFor="profileTwitterInput"></label>
           <input type="text" name="twitter" className="form-control" id="profileTwitterInput" placeholder="Insira o link do twitter" value={edit.twitter} onChange={handleChange} />
           <label htmlFor="profileEditYoutubeInput"></label>
           <input type="text" name="youtube" className="form-control" id="profileEditYoutubeInput" placeholder="Insira o link do youtube" value={edit.youtube} onChange={handleChange} />
         </div>
         <div className="form-group">
         <div className="input-group mb-3">
           <div className="custom-file">
             <input type="file"  name="attachment" className="custom-file-input" id="attachmentProfileInput" onChange={handleChange}/>
             <label htmlFor="attachmentProfileInput" className="custom-file-label">Choose file</label>
           </div>
           <div className="input-group-append" />
             <span className="input-group-text" id="attachmentProfileInput">Upload</span>
           </div>
         </div>
         <button type="submit" className="btn btn-dark">Confirmar Alterações</button>
         </form>
            </div>
    )
}

export default ProductForm; */


/* title: String,
description: String,
price: Number,
specifications: String,
evaluation: String,
user: { type: Schema.Types.ObjectId, ref: "User" },
artType: { type: String, enum: ["Artes Literárias", "Audiovisual", "Artes Visuais", "Artesanato"] }, ---> select com as opções
media: String ---> tipo file*/ 