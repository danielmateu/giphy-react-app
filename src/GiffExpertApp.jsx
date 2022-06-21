import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

import 'animate.css';

export const GiffExpertApp = () => {

  const [categories, setCategories] = useState(['Goku']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    // setCategories(cat => ['Nuk',...cat]);
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GiffExpertApp</h1>
      <AddCategory
        // setCategories = {setCategories}
        onNewCategory={event => onAddCategory(event)}
      />
      {
        categories.map((category) =>
        (
          <GifGrid key={category} category={category} />
        )
        )
      }
      {/* Gif Item */}
    </>
  )
}
