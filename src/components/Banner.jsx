import React from 'react'
import Container from './Container'
import ban from "../assets/ban.png"
import Slider from 'react-slick'
import { useSelector } from 'react-redux'

function Banner() {

    let data=useSelector((state)=>state.product.products)
    console.log(data);
    
    const settings = {
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,


        appendDots: dots => (
            <div 
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: "absolute",
                    left: "10%",
                    top: "50%",
                    transform: "translateY(-50%)"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='lg:block hidden'
                style={{
                    width: "30px",
                    color: 'transparent',
                    borderRight: "2px white solid",
                    padding: "10px 0"
                }}
            >
                0{i + 1}
            </div>
        )
    };

    return (
        <div className=''>
            {/* <h2>{data}</h2> */}
            <Slider {...settings}>
                <div className=''>
                    <img src={ban}></img>
                </div>
                <div className=''>
                    <img src={ban}></img>
                </div>
                <div className=''>
                    <img src={ban}></img>
                </div>
                <div className=''>
                    <img src={ban}></img>
                </div>
            </Slider>
        </div>
    )
}

export default Banner