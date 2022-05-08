import React from "react";
import "./Post.css";

function Post({userphoto, username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        {/* Header: avatar with username */}
        <div className="post__headerwrapper">
          <div className="profile__wrapper">
            <img className="post__profileimage" alt="Profile Image" src={userphoto}/>
            <h3>{username}</h3>
          </div>
          <div className="more">...</div>
        </div>
      </div>
      {/* Image */}
      <img className="post__image" src={imageUrl} alt="" loading="lazy"/>
      {/* Botões + navegação entre paginas do post*/}
      <div className="post__buttons">
        {/* Botões da esquerda(like, comentar e enviar msg)*/}
        <div className="post__buttons_left_wrapper">
          <img className="btn_image post__btn" src="./images/icons8-heart-96.png"/>
          <img className="btn_image post__btn" src="./images/icons8-message-48.png"/>
          <img className="btn_image post__btn" src="./images/icons8-sent-100.png"/>
        </div>
        {/* Botões de navegação entre imagens do post }
        <div className="post__middlenav">
          <input type="radio" value="1" name="btn" className="post__radiobtn"/>
          <input type="radio" value="2" name="btn" className="post__radiobtn"/>
          <input type="radio" value="3" name="btn" className="post__radiobtn"/>
        </div>
        {*/}
        <div className="post__buttons_right_wrapper">
          <img className="btn_image post__btn" src="./images/icons8-save-64.png"/>
        </div>

      </div>
      
      {/* Username + caption */}
      <h4 className="post__text">
        <strong>{username}</strong> <p>{caption}</p>  
      </h4>  
      <p className="post__date">HÁ 4 HORAS</p>

      {/* secção de input de comentário com input, 
      botão emoji e botão publicar */}
      <div className="post__comments">
        <img className="btn_image post__btn" src="./images/icons8-emoji-48.png"/>
        <textarea className="post__commentinput" placeholder="Adicione um comentário..."/>
        <button className="post__commentbtn">Publicar</button>
      </div>
    </div>
  );
}

export default Post;