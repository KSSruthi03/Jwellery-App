import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Carousel } from 'react-bootstrap'

function Carouseljwel() {

    const Jwellery = [{
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
  image: '	https://uploads-ssl.webflow.com/62428c67e286b9c91b…9d0/626eaf9fa885cb53f5f26966_gemstonej%20(1).webp',
  title: " Gemstone & Polki jewellery",
  description: "A Striking Beauty to Adorn."
},
{
  image: 'https://uploads-ssl.webflow.com/62428c67e286b9c91b3899d0/62700b17c421287b754e7521_gs%3D1%20(1).webp',
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
        {Jwellery.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block" src={item.image} alt={item.title} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
            <Carousel.Caption className='text-white' style={{ marginTop: "100px" }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

       <div className='container-fluid mt-5 d-flex flex-wrap gap-4 left-0 display-flex'>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw974dbce3/images/hi-res/51W5GKNKJAAP3_1.jpg?sw=640&sh=640" style={{ width: '100', height: '200px', objectfit: 'cover' }}></Card.Img>
            <Card.Title style={{fontFamily:"cursive"}}> Yellow Gold Temple Necklace </Card.Title>
            <Card.Subtitle style={{fontFamily:"cursive"}}>"₹6000"</Card.Subtitle>
          </Card.Body>
        </Card>
</div>
         {/* <Card>
          <Card.Body>
            <Card.Img variant="top" src="" style={{ width: '100', height: '200px', objectfit: 'cover' }}></Card.Img>
            <Card.Title style={{fontFamily:"cursive"}}> </Card.Title>
            <Card.Subtitle style={{fontFamily:"cursive"}}>"₹"</Card.Subtitle>
          </Card.Body>
        </Card> */}

    
      
    </div>
  )
}

export default Carouseljwel
