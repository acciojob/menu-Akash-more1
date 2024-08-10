// import React, { useState } from 'react';
// import { data as initialData } from './Data.js';
// import '../styles/App.css';

// function App() {
//   const [data, setData] = useState(initialData);
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const filterData = (category) => {
//     setSelectedCategory(category);
//     if (category === 'All') {
//       setData(initialData);
//     } else {
//       const filData = initialData.filter((item) => item.category === category.toLowerCase());
//       setData(filData);
//     }
//   };

//   return (
//     <div id="main">
//       <h1 className="title">Our Menu</h1>
//       <hr className="title-underline" />
//       <div className="categories">
//         <h3 id="filter-btn-1" onClick={() => filterData('All')}>All</h3>
//         <h3 id="filter-btn-2" onClick={() => filterData('Breakfast')}>Breakfast</h3>
//         <h3 id="filter-btn-3" onClick={() => filterData('Lunch')}>Lunch</h3>
//         <h3 id="filter-btn-4" onClick={() => filterData('Shakes')}>Shakes</h3>
//       </div>
//       <div className="menu">
//         {data.map((item) => (
//           <div className="menu-item" key={item.id} data-test-id={`menu-item-${item.category}`}>
//             <img src={item.img} alt={item.title} className="item-img" />
//             <div className="item-details">
//               <div className="title-price">
//                 <h2>{item.title}</h2>
//                 <h2 className="price">${item.price}</h2>
//               </div>
//               <hr />
//               <span>{item.desc}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import '../styles/App.css';
 
export default function App() {
    const [menu, setMenu] = React.useState([
        {
          id: 1,
          title: 'buttermilk pancakes',
          category: 'breakfast',
          price: 15.99,
          img: './images/item-1.jpeg',
          desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
          id: 2,
          title: 'diner double',
          category: 'lunch',
          price: 13.99,
          img: './images/item-2.jpeg',
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
          id: 3,
          title: 'godzilla milkshake',
          category: 'shakes',
          price: 6.99,
          img: './images/item-3.jpeg',
          desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
          id: 4,
          title: 'country delight',
          category: 'breakfast',
          price: 20.99,
          img: './images/item-4.jpeg',
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
          id: 5,
          title: 'egg attack',
          category: 'lunch',
          price: 22.99,
          img: './images/item-5.jpeg',
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
          id: 6,
          title: 'oreo dream',
          category: 'shakes',
          price: 18.99,
          img: './images/item-6.jpeg',
          desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
          id: 7,
          title: 'bacon overflow',
          category: 'breakfast',
          price: 8.99,
          img: './images/item-7.jpeg',
          desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
          id: 8,
          title: 'american classic',
          category: 'lunch',
          price: 12.99,
          img: './images/item-8.jpeg',
          desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
          id: 9,
          title: 'quarantine buddy',
          category: 'shakes',
          price: 16.99,
          img: './images/item-9.jpeg',
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ]);
 
    const [active, setActive] = React.useState('all');
 
    const isActive = (type) => {
        return type === active ? 'active' : '';
    };
 
    const onClick = (e, type) => {
        e.preventDefault();
        setActive(type);
    };
 
    return (
        <div id="main">
            <h1>Our Menu</h1>
 
            <ul className="categories">
                <li>
                    <a href="/" id="filter-btn-0" className={isActive('all')} onClick={(e) => onClick(e, 'all')}>
                        All
                    </a>
                </li>
                <li>
                    <a href="/" id="filter-btn-1" className={isActive('breakfast')} onClick={(e) => onClick(e, 'breakfast')}>
                        Breakfast
                    </a>
                </li>
                <li>
                    <a href="/" id="filter-btn-2" className={isActive('lunch')} onClick={(e) => onClick(e, 'lunch')}>
                        Lunch
                    </a>
                </li>
                <li>
                    <a href="/" id="filter-btn-3" className={isActive('shakes')} onClick={(e) => onClick(e, 'shakes')}>
                        Shakes
                    </a>
                </li>
            </ul>
 
            <ul className="list">
                {menu.filter(item => (item.category === active || active === 'all')).map((item) => (
                    <li key={item.id} data-test-id={`menu-item-${item.category}`}>
                        <img src={item.img} alt={item.title} />
                        <div>
                            <div className="top">
                                <h2>{item.title}</h2>
                                <span>$ {item.price}</span>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}