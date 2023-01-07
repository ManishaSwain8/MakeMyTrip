import React from "react"
import Logobar from "./components/Logobar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import Footer from "./components/Footer"
import Para from "./components/Para"
export default function App(){
  const cards =data.map(item=>{
  return(
    <Card
        img={item.img}
        title={item.title}
        rating={item.rating}
        price={item.price}
    />
  )
})
return(
  <div>
    <Logobar/>
    <Hero/>
    <Para/>
    
    {cards}
    <Footer/>
  </div>
)}
/* <Card
        img="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4916/kuta.jpg?crop=192:285&downsize=192:285"
        title="Bali "
        rating="4.8/5"
        price="Starting at Rs.14,500/person"
      />
      <Card
        img="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/I.jpg?crop=192:285&downsize=192:285"
        title="Thailand "
        rating="4.4/5"
        price="Starting at Rs.11,800/person"
      />
      <Card
        img="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Grand%20Park.JPG?crop=192:285&downsize=192:285"
        title="Maldives "
        rating="4.8/5"
        price="Starting at Rs.16,900/person" */