import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    console.log(loading);


    /* const [images, setImages] = useState([]);
    
    useEffect( () => {
        getGif(category)
            .then( imgs => setImages(imgs))
    }, [category]) */

    

    return (
        <>
            <h3>{category}</h3>
            
            {loading && <p>Loading</p>}
            
            <div className='card-grid'>
                {
                    data.map( img => (
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
        
    )
}
