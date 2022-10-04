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
            <a href={item.link} target="_blank" rel="noopener">
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
    img: 'https://m.media-amazon.com/images/I/51oHUvYzbsL.jpg',
    title: 'The Theory Of Everything',
    description: 'Physics Theories in a Nutshell',
    link: 'https://amzn.to/3SMFXnK',
  }, 
];


