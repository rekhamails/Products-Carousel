import React, { useEffect, useState } from "react";
import data from '../../data';
import './Search.css';
import useCarouselHook from "../Carousel/CarouselHook";

const Search = () => {

    const { filterProducts } = useCarouselHook();
    const [activeFilter, setActivefilter ] = useState([]);

     let obj = data.products.reduce(function (r, a) {
        r[a.category] = (r[a.category] || 0) + 1;
        return r;
    }, {}); 

    const categories = Object.keys(obj);
    
    const onFilterChange = (filter) => {
        console.log('filter change : ', filter);
        if (activeFilter.includes(filter)) {
            const filterIndex = activeFilter.indexOf(filter);
            const newFilter = [...activeFilter];
            newFilter.splice(filterIndex, 1);
             setActivefilter(newFilter);
          } else {
            setActivefilter([...activeFilter, filter]);
          }
    }
    
    useEffect(() => {
        console.log('use effect called');
        filterProducts(activeFilter);
    }, [activeFilter, filterProducts]);

    return (
        <section id="search">
            <ul>
            {
                categories.map(category => {
                    return (
                        <li key={category}>
                            <label className="container" >
                                {category}
                                <input type="checkbox"  checked={activeFilter.includes(category)} onChange={() => onFilterChange(category)}/>
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    );
                })
            }
            </ul>
        </section>
    )
}

export default Search;