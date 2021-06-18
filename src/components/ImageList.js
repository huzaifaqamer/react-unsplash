import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
import Paginator from './Paginator';


const ImageList = props => {

    const onButtonClick = (page) => {
        props.onNewPage(page);
    };

    const baseClass = props.images.length > 0 ? "ui segment" : "ui";

    const images = props.images.map((image) => {
        return <ImageCard image={image} key={image.id} />
    });

    return (
        <div className={`${baseClass}`}>
            <div className="image-list">{images}</div>
            <Paginator 
                direction='left'
                current_page={props.current_page}
                total_pages={props.total_pages}
                onButtonClick={onButtonClick}
            />
            <Paginator
                direction='right'
                current_page={props.current_page}
                total_pages={props.total_pages}
                onButtonClick={onButtonClick}
            />
        </div>
    );
};

export default ImageList;