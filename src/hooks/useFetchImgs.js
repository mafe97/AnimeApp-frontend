import { useEffect, useState } from "react";
import { getImgs } from "../helpers/getImgs";

export const useFetchImgs = ( category ) => {


  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getImgs( category );
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect( () => {

    getImages();
    
  }, []);

    return {
        images,
        isLoading
    }

}
