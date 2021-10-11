import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Gallery() {
    const [galleryItems, setGallery] = useState(['']);
    useEffect(() => {
        showGallery();
    }, []);
    function showGallery() {
        axios.get('https://bitmover.solutions:8443/list',
            {
                headers: { 'Access-Control-Allow-Origin': '*' },
                auth: { username: 'yolo', password: '123swagswag321' }
            })
            .then(function (response) {
                console.log('Success');
                console.log(response);
                setGallery(response['data']);
                //return response;
            })
            .catch(function (error) {
                console.log(error);
            }
            );
        //return 0;
    }

    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {
                (galleryItems)
                    ?
                    <div>
                        {galleryItems.map((item) => (
                            <ImageListItem key={item.text + Math.random() * 100}>
                                <img
                                    src={`${item.image}`}
                                    srcSet={`${item.image}`}
                                    alt="0000"
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </div>
                    :
                    <div>
                        <h3>Loading</h3>
                    </div>
            }

        </ImageList>
    );
}

export default Gallery;