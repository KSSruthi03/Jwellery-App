import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

function Carouselitems() {

    const itemss = [
    {
  image: 'https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/6390654cc2a6070ae821c3de_2D2A9075%203.jpg',
  title: " Temple Jewellery",
  description: "It invokes a sense of a divine presence in your life every time you wear the piece."
    },
    {
  image: 'https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/6390668a5fb6d179b45a4f2b_1_RUbUnT-NPRpUxGVVQce4kA.webp',
  title: "Temple Necklace  ",
  description: "Divine figurines in their most basic form."
},
{
  image: 'https://sparkleandglow.co.in/cdn/shop/files/9961_0.jpg?v=1754163143',
  title: " Gemstone & Polki jewellery",
  description: "A Striking Beauty to Adorn."
},
{
  image: 'https://cdn.prod.website-files.com/62445c7e184806f3e9ab9904/63aec8586c21e650d7e15728_2D2A9159%202%20(1).jpg',
  title: "versatile Gemstone jewellery ",
  description: "An Eternal Elegance of Royalty."
},
{
  image: 'https://www.kalyanjewellers.net/blog/wp-content/uploads/2024/03/temple-jewellery-the-timeless-classic.jpg',
  title: "Traditional temple jewellery ",
  description: "Temple jewellery has always been a part of the South Indian bride’s trousseau."
},
{
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/322519032/KO/FR/FF/85765501/new-product-500x500.jpeg',
  title: "South Indian Bridal Jewelry ",
  description: "These pieces often hold deep symbolic meanings."
},
 ]


  return (
    
       <div className='carosil'>
      <Carousel>
        {itemss.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block" src={item.image} alt={item.title} style={{ height: '600px', objectFit: 'cover', width: '100%' }} />
            <Carousel.Caption className='text-white' style={{ marginTop: "100px" }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Carouselitems
