import Carousel from '@itseasy21/react-elastic-carousel';

import { ImgItem } from "./ImgItem";

import { useFetchImgs } from "../hooks/useFetchImgs";

export const ImgGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchImgs ( category );

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <>
      <h2>{ category }</h2>
      {
        isLoading && (<h2>Loading...</h2>)
      }
      <div className="card">
        <Carousel breakPoints={ breakPoints }>
          {
            images.map( ( image ) => (
                <ImgItem 
                    key={ image.id }
                    {...image}
                />
            ))
          }
        </Carousel>
      </div>
    </>
  )
}
