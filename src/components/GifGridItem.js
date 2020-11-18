import React from 'react'

export const GifGridItem = ({title, url, id}) => {

    return (
        <div  className="card">
            <img 
                height='120'
                src={url}
                alt={title}
            />
            <p>{title}</p>

        </div>
    )
}
