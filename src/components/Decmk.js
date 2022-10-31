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
    img: 'https://m.media-amazon.com/images/P/144475954X.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'THE ART OF THINKING CLEARLY: BETTER THINKING, BETTER DECISIONSy ',
    description: 'Reduce your biases ',
    link: 'https://amzn.to/3SSPFon',
  },
  {
    img: 'https://m.media-amazon.com/images/I/617IVbY-9qL.jpg',
    title: 'Superforecasting: The Art and Science of Prediction',
    description: 'Improve your predicition ability',
    link: 'https://amzn.to/3CvsBGO',
  },
  {
    img: 'https://m.media-amazon.com/images/P/0007256531.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'Predictably Irrational: The Hidden Forces that Shape Our Decisions',
    description: 'Primer to Behavioral Economics',
    link: 'https://amzn.to/3M6Lp2g',
  },
 

  
];
