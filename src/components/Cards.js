import React from "react";
import './Cards.css';

function Cards({title,imageurl,body,color,model}) {

  function viewMore(e) {
    const button = e.target
    const amca = button.parentNode.nextSibling
    amca.classList.remove("hidden")
    button.classList.add("hidden")
  }

    return (
        <div className='cards-container'>
          <div className="image-container">
            <img src={imageurl} alt='' />
          </div>
          <div className="cards-content">
            <div className="cards-title">
              <h3>{title}</h3>
            </div>
            <div className="cards-body">
              <p></p>
            </div>
          </div>
         
          <div className="btn">
             <button onClick={(e) => viewMore(e)}>
                VIEW MORE
             </button>
          </div>
          <div className="hidden">
            <div className="hala">
              <p>{body}</p>
              <p>color : {color}</p>
              <p>model : {model}</p>
            </div>
          </div>
        </div>

      )
}
export default Cards;