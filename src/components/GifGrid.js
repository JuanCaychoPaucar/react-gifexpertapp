import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    // renombramos data como images
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>

            {/* Si solamente queremos evaluar la primera condicion. En vez de colocar un ternario => condicion ? true : false */}
            {loading && <p>Loading</p>}

            <div className="card-grid">
                {
                    images.map(image => {
                        //* {...image} => enviamos el objeto como props para desestructurarlo
                        return <GiftGridItem key={image.id} {...image} />
                    })
                }
            </div>
        </>
    )
}
