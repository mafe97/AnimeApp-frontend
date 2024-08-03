import { useState } from 'react';
import { AddCategory, ImgGrid, MessageApi } from './components';

export const AnimeApp = () => {

const [categories, setCategories] = useState([ ' Xiao Yao' ]);

const onAddCategory = (newCategory) => {

    const lowerCaseCat = newCategory.toLowerCase();

    if ( categories.map(category => category.toLowerCase()).includes(lowerCaseCat)) return;
    
    setCategories([ newCategory, ...categories ] )
};

  return (
    <>
      <h1>動漫</h1>

      <AddCategory 
          onNewCategory={ (value) => onAddCategory(value) }
      />
        {
            categories.map( ( category ) => (
                <ImgGrid 
                    key={ category } 
                    category={ category }    
                />
            ))
        }  

        <MessageApi />    
    </>
  )
}



export default AnimeApp;


