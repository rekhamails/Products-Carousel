import React, { useState } from "react";
import data from '../../data';
import './Search.css';

const Search = () => {

    const [activeFilter, setActivefilter ] = useState([]);

     let obj = data.products.reduce(function (r, a) {
        r[a.category] = (r[a.category] || 0) + 1;
        return r;
    }, {}); 

    const categories = Object.keys(obj);
    
    const onFilterChange = (filter) => {
        console.log('filter : ', filter);
        if (activeFilter.includes(filter)) {
            console.log('inside if');
            const filterIndex = activeFilter.indexOf(filter);
            const newFilter = [...activeFilter];
            newFilter.splice(filterIndex, 1);
            console.log(newFilter);
            setActivefilter(newFilter);
          } else {
            setActivefilter([...activeFilter, filter]);
          }
    }
    
    return (
        <section id="search">
            <ul>
            {
                categories.map(category => {
                    return (
                        <li key={category}>
                            <label className="container" >
                                {category}
                                <input type="checkbox"  checked={activeFilter.includes(category)} onClick={() => onFilterChange(category)}/>
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