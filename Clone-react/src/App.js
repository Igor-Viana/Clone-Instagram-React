import React, { useState } from "react";
import Post from "./components/post/Post";
import Status from "./components/post/Status"
import Sugest from "./components/post/Sugest";
import "./App.css";
//import Modal from "@material-ui/core/Modal";

function App() {
  const [posts, setPosts] = useState([
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/C4E03AQFx_82It-q_lw/profile-displayphoto-shrink_200_200/0/1647929425628?e=1657152000&v=beta&t=QGJ3wf_gOezX2Xes3JoEfymBWRpoJF8Kf3iDo6e3rws",
      username: "Igor.Viana",
      caption: "Primeiro post na plataforma!", 
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    },
    
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/D4D35AQEbFZO0uZjA-g/profile-framedphoto-shrink_100_100/0/1646951968694?e=1652047200&v=beta&t=bfGx3wnpaHxRMdb_B27UTwagT1nkjTYHpN91jrZsbhA",
      username: "Diego.Santos",
      caption: "Depois de uma semana corrida, só aquela prainha boa pra relaxar o joelho!", 
      imageUrl: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/C4E03AQFiOKUyXDtT3Q/profile-displayphoto-shrink_100_100/0/1648644387806?e=1657152000&v=beta&t=tM2RTSnUKrddQjJHpxzerhUjD37SfXnQLZkY6gAnsxA",
      username: "João.Conrado",
      caption: "Acabei de ganhar na mega da virada!", 
      imageUrl: "https://images.unsplash.com/photo-1541535881962-3bb380b08458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80",
    },
    
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/C560BAQGW-IXV9aAHAg/company-logo_200_200/0/1635286588644?e=1660176000&v=beta&t=Fyl8XXIRoZXJR9HJvNN08NzMVRghx-hOxW5biDLEJQ4",
      username: "itau",
      caption: "O cartão acessível de iti foi premiado no IF Design Award 2022, um dos mais importantes prêmios de design do mundo. Esse projeto nos enche de orgulho porque de fato resolveu uma dor do cliente, o conceito primordial da nossa disciplina. A gente dá parabéns a todos os envolvidos, principalmente: @lvmayer @gabjastrenski @juliacresende @juliahaiad @kecaetano", 
      imageUrl: "https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/10/carta-iti-visa.jpg?resize=800%2C450&ssl=1",
    },
    
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/C4D03AQE_dBg0BqszNQ/profile-displayphoto-shrink_100_100/0/1648081243104?e=1657756800&v=beta&t=htynR6dns-J3vpUFLB0i0aEPUw451PXhFx5wpNNPvaU",
      username: "pedro.GameDev",
      caption: "Finalmente lancei meu jogo, ganhei o goty e umas outras premiações aí, mas vida que segue!", 
      imageUrl: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-keyart-01-en-07sep21?$facebook$",
    },
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/C4D03AQETp7W7Dk9wrQ/profile-displayphoto-shrink_100_100/0/1530647162282?e=1657756800&v=beta&t=ApC8hzppdZhng9WkHUyXjoOC1AHFgr-VdwrdzUaNHcg",
      username: "Giullia.maria",
      caption: "Finalmente conquistei meu país próprio!", 
      imageUrl: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/D5635AQF22u5Fvi51Rw/profile-framedphoto-shrink_100_100/0/1648676933375?e=1652065200&v=beta&t=fr7RWgMpWwRCNOWQ7PVJ-nqiPfmzczPqpVThZkNySFo",
      username: "Andre.palhares",
      caption: "Fui chamado pela NASA para codar um pequeno projeto em andamento, o 'talking with aliens'", 
      imageUrl: "https://images.pexels.com/photos/39698/space-shuttle-atlantis-liftoff-mission-rocket-39698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/D5635AQHmsmKGo3AZmQ/profile-framedphoto-shrink_100_100/0/1651608195723?e=1652065200&v=beta&t=VDu9JKQOgfq4kiCXIF9ZsAvsqyL24DwFW29vI5RC2eE",
      username: "Nicolly.gabriele",
      caption: "Acabei de comprar a ambev, quero ver alguém falar que o estoque esgotou!", 
      imageUrl: "https://jcconcursos.com.br/media/_versions/noticia/ambev-novo_widelg.jpg",
    },
    {
      userphoto: "https://media-exp1.licdn.com/dms/image/C4D03AQFgpx9zI8VAdA/profile-displayphoto-shrink_100_100/0/1610561338360?e=1657756800&v=beta&t=9KCD0g6qNFG1urAWqXelIvWMwDC2lKsLPJUNqhcy30M",
      username: "Jailson.proa",
      caption: "braço curto.", 
      imageUrl: "https://thumbs.dreamstime.com/z/man-broken-arm-wrapped-medical-cast-plaster-fiberglass-covering-wrist-elbow-sport-accident-isolated-black-158011178.jpg",
    },
  ]);

  return (

    <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
            className="logo"
          />
          <form>
            <label className="search_section">
              <img className="search_icon" alt="" src="/images/icons8-search.svg"/>
              <input className="search_bar" type="text" name="Pesquisar" placeholder="Pesquisar"/>
            </label>
          </form>
          <div className="app__headerButtons">
            <button className="btn"><img className="btn_image" src="/images/icons8-home.svg" alt="Home"/></button>
            <button className="btn"><img className="btn_image" src="/images/icons8-sent-100.png" alt="Messages"/></button>
            <button className="btn"><img className="btn_image" src="/images/icons8-add-new-100.png"alt="Add new"/></button>
            <button className="btn"><img className="btn_image" src="/images/icons8-compass-96.png" alt="Discover"/></button>
            <button className="btn"><img className="btn_image" src="/images/icons8-heart-96.png" alt="Liked"/></button>
            <img className="profile_image" alt="Profile Photo" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=1660176000&v=beta&t=RucxRfnnPoTT_1jjsfdf4yxR_Lu17K6p6gU-jjIUJ7A"/>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    <div className="sectionWrapper">
      <div className="leftSection_wrapper">
        <div className="status_wrapper">
          <div className="status">
            {posts.map((post) => (
              <Status
              userphoto={post.userphoto}
              username={post.username}
              />
            ))}
              

          </div>
        </div>
        
        
        <div className="tl_wrapper">
          <div className="timeline">
            {posts.map((post) => (
              <Post
              userphoto={post.userphoto}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="rightSection_wrapper">
        <div className="rightSection">
          <div className="trocarPerfil">
            <img className="profile_image" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=1660176000&v=beta&t=RucxRfnnPoTT_1jjsfdf4yxR_Lu17K6p6gU-jjIUJ7A" alt="Profile Photo"/>
            <div className="nomePerfil">
              <h3>PROA</h3>
              <h4>instituto.proa</h4>
            </div>
            <button className="btn_trocarPerfil">Mudar</button>
          </div>
          <div className="sugestoes">
            <h3>Sugestões para ti</h3>
            <button>Ver todas</button>
          </div>
          <div className="sugestoesConteudo">
            {posts.map((post) => (
              <Sugest
                userphoto={post.userphoto}
                username={post.username}
                legenda={"Te segue"}
              />
            ))}            
          </div>
        </div>
      </div>
    </div>

  </div>
  
  );
}

export default App;
