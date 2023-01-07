import React from "react"

export default function Card(props){
console.log(props)   //optional if u want to se object (props in console)
    return(
       <div className="total">
        <div className="card">
            
            <img className="card--image" src={props.img}></img>
            
            <span className="word">{props.title}</span><br/>
            <div className="card--stats">
            <span>{props.price}</span><br/>
            <span><button className="button" type="button">{props.rating}</button></span>
            
            </div>
            
            </div>
        </div>
       
    )
}
/*<img className="card--image" src="https://experiences.makemytrip.com/details?activityId=1145"></img>
            <div className="card--stats">
            <span>Ramoji Film City,Hyderabad:Entry Ticket</span>
            <span>Rs.1475</span>
            <span><button className="button" type="button">4.4/5</button></span>
            </div>
            <img className="card--image" src="https://images-acme.mmtcdn.com/prod-acme-image/system/product_media/c/525/media8A6AYU3W7D32J.PNG"></img>
            <div className="card--stats">
            <span>Wonderla Amusemer Park,Banglore</span>
            <span>Rs.1650</span>
            <span><button className="button"type="button">4.3/5</button></span>
            </div>
            <img className="card--image" src="https://images-acme.mmtcdn.com/prod-acme-image/system/product_media/c/150131/media4L9D3P3Z82Y4B.jpg"></img>
            <div className="card--stats">
            <span>Universal Studios Singapore</span>
            <span>Rs.1650</span>
            <span><button className="button"type="button">4.7/5</button></span>
            </div>
        </div>*/