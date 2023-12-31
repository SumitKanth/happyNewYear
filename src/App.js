import React from "react";
import './style.css';
import div_gif from './gif_img.gif';

const App = () => {

  const gif = () => {
    const h1 = document.querySelector('h1');
    const btn = document.querySelector('button');
    const img = document.querySelector('img');
    const h2 = document.querySelector('h2');
    h1.style.display = "none";
    btn.style.display = "none";
    img.style.display = "inline";
    h2.style.display = "inline-block";
  }

  return (
    <>
      <div className="container">
            <h1> Happy Wala <span> New Year </span> 🤡</h1>
            <button onClick={gif}>Click On Me</button>
            <div className="gif_div">
              <img src={div_gif}/>
              <br />
              <h2>ese hi haste rahio hamesha 🤣🤣 </h2>
            </div>
      </div>
    </>
  )
}

export default App;