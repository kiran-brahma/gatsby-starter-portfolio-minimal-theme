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
    img: 'https://m.media-amazon.com/images/I/81AdLep0svL.jpg',
    title: 'Algorithms to Live By',
    description: 'Learn from Comuter Algorithms',
    link: 'https://amzn.to/3Cw8Tec',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81WX9cDLUZL.jpg',
    title: 'Essentialism: The Disciplined Pursuit of Less',
    description: 'Simplifying your daily life',
    link: 'https://amzn.to/3Cw8Tec',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71Rt1ml9tNL.jpg',
    title: 'When: The Scientific Secrets of Perfect Timing',
    description: 'Timing is everything',
    link: 'https://amzn.to/3RAFcNs',
  }, 
  
];
