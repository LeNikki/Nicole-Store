import React from "react"
export default function Item (props){
   
    return (
        <div className="hotPicks-item">
            <img src= {props.img} alt="prod-img" className="prod-img"/>
            <section className="hotPicks-info">
                <h2 className="prod-name">{props.name}</h2>
                <p className="rating"><i class="fa-solid fa-heart"></i> {props.rating}</p>
                <p className="price">{props.price}</p>
                <button className="add-to-cart"> Add to cart </button>
            </section>
         </div>
    )
}