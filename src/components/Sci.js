import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: '100%' }}>
    <ImageList cols={1} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <a href={item.link} target="_blank" rel="noreferrer">
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              width="150" height="225"
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
    img: 'https://m.media-amazon.com/images/I/91I6sBtBxAL.jpg',
    title: 'Storm in a Teacup: The Physics of Everyday Life',
    description: 'Physics for Everyone',
    link: 'https://amzn.to/3rw1oxG',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81S8ikILfFS.jpg',
    title: 'How God Works',
    description: 'Science behind religious rituals',
    link: 'https://amzn.to/3SWxBK0',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71Um3LYsWhL.jpg',
    title: 'What If?',
    description: 'Answers to Crazy Questions',
    link: 'https://amzn.to/3SzcXQA',
  }, 
  
];
