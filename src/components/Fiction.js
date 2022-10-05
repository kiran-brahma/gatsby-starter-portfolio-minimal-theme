import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 800 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <a href={item.link} target="_blank" rel="noreferrer">
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              width="200" height="300"
              loading="lazy"
            /></a>

            <ImageListItemBar position="below" title={item.description} />


          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/91DUejN+hAL.jpg',
    title: 'She Three-Body Problem Series',
    description: 'Aliens are Coming',
    link: 'https://amzn.to/3rswkPd',
  },
  {
    img: 'https://m.media-amazon.com/images/I/A122LIfHX9L.jpg',
    title: 'Ready Player One',
    description: 'When AR/VR Takes over',
    link: 'https://amzn.to/3rrzLFY',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71+-y3CKfiL.jpg',
    title: 'The Broken Earth Series',
    description: 'World of Volcanoes & Earthquakes',
    link: 'https://amzn.to/3SRx1xe',
  }, 
  
];
