import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 800 }}>
      <ImageList variant="masonry" cols={2} gap={8}>
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
    img: 'https://m.media-amazon.com/images/I/81RdveuYXWL.jpg',
    title: 'Guns, Germs And Steel:',
    description: 'History of Current Societial Structures',
    link: 'https://amzn.to/3Cw8Tec',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71AHF2vYKTL.jpg',
    title: 'Origin Story: A Big History of Everything',
    description: 'A Quick bite on everything',
    link: 'https://amzn.to/3UYXNFE',
  },
  {
    img: 'https://m.media-amazon.com/images/I/616ZyheN31L.jpg',
    title: 'Sapiens: A Brief History of Humankind:',
    description: 'Essential History Read',
    link: 'https://amzn.to/3C5vRHO',
  }, 

  {
    img: 'https://m.media-amazon.com/images/I/91rw8Le-deL.jpg',
    title: 'A Short History Of Nearly Everything',
    description: 'Short Guide to nearly every topic',
    link: 'https://amzn.to/3yeQW16',
  }, 
  
];


