import React, { useState } from "react";
import data from '../../data';
import './Carousel.css';

const Carousel = () => {
    
    const [count, setCount ] = useState(3);
    const [products, setProducts] = useState([...data.products]);

    const nextSlide = () => {
        console.log("count in next slide : ",count)
        setProducts(data.products.slice(count, count+3));

        setCount(count+3);
    }

    const prevSlide = () => {
        console.log("count in prev slide", count, data.products);
        setProducts(data.products.slice(count-6,count));
        console.log(products);
        setCount(count-3);
    }


    return (
        <div className="carousel">
            <div className="carousel-container">
                {products.map(product => {
                    return (
                        <div key={product._id} className="card">
                            <img className="medium" src={product.image} alt={product.name}/>
                            <div className="card-body">
                                 <h2>{product.name}</h2> 
                                 <p>{product.category}</p>
                                <div className="price">${product.price}</div>
                            </div>
                         </div>  
                )

                })
                }
            </div>
            <ul className="carousel-controls">
                <li id="chevron-arrow-left" className={count <= 3 ? 'disabled' : '' } onClick={prevSlide}></li>
                <li id="chevron-arrow-right" className={count >= data.products.length ? 'disabled' : '' } onClick={nextSlide}></li>
            </ul>
        </div>
    )
}

export default Carousel;