
// import React, { useState } from 'react'
// import Menus from './Menus'
// import Categories from './categories/Categories'
// import items from './Components/data'

// const allCategories = ['all', ...new Set(items.map((item) => item.category))]

// function Category() {
//   const [menuItems, setMenuItems] = useState(items)
//     const [categories, setCategories] = useState(allCategories)
  
//     const filterItems = (category) => {
//       if (category === 'all') {
//         setMenuItems(items)
//         return
//       }
//       const newItems = items.filter((item) => item.category === category)
//       setMenuItems(newItems)
//     }
//     return (
//       <main>
//         <section className="menu section">
//           <div className="title">
//             <h2>Categories</h2>
//             <div className="underline"></div>
//           </div>
//           <Categories categories={categories} filterItems={filterItems} />
//           <Menus items={menuItems} />
//         </section>
//       </main>
//     )
  
// }

// export default Category
