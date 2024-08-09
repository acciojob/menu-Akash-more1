
import React, { useState } from 'react'
import{data as initialData} from './Data.js'
import '../styles/App.css'

function App() {
 const [data, setData] = useState(initialData);
 const [cate, setCate]= useState('All');

 const filterData= (category)=>{
  if(category === 'All'){
    setData(initialData);
  }
  else{
    const filData = initialData.filter((item)=> item.category === category.toLowerCase());
    setData(filData);
  }
 }

  return (
    <div id="main">
      <h1 className="title">Our Menu</h1>
      <hr className="title-underline" />
      <div className="categories">
  <h3 id="filter-btn-1" onClick={()=>{filterData('All')}}>All</h3>
  <h3 id="filter-btn-2" onClick={()=>filterData('Breakfast')}>Breakfast</h3>
  <h3 id="filter-btn-3" onClick={()=>{filterData('Lunch')}} >Lunch</h3>
  <h3 id="filter-btn-4" onClick={()=>{filterData('Shakes')}} >Shakes</h3>
</div>
      <div className="menu">
        {data.map((item) => (
          <div className="menu-item" key={item.id} data-test-id={`menu-item-${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`}>
            <img src={item.img} alt={item.title} className="item-img" />
            <div className="item-details">
              <div className="title-price">
                <h2>{item.title}</h2>
                <h2 className="price">${item.price}</h2>
              </div>
              <hr />
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;