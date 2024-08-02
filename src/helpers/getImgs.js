import { ApiUrl } from "../contexts/ids";

export const getImgs = async( category ) => {

    const url = `${ApiUrl}/v4/anime?q=${category}&limit=12`;
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const imgs = data.map(img =>({
      id: img.mal_id, 
      title: img.title,
      url: img.images.jpg.large_image_url
    }));

    return imgs;
}