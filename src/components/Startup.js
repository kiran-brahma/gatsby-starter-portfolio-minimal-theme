import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 500 }}>
      <ImageList cols={2} gap={10}>
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
    img: 'https://m.media-amazon.com/images/I/71tX0KYBCkL.jpg',
    title: 'Art of the Start 2.0: ',

    description: 'Start-up Guide ',
    link: 'https://amzn.to/3M6aPgt',
  },
  {
    img: 'https://m.media-amazon.com/images/P/0062273205.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'The Hard Thing about Hard Thing: Building a Business When There are No Easy Answers',

    description: 'Business Building Challanges',
    link: 'https://amzn.to/3dZB2Rz',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61GFc+k-5PL.jpg',
    title: 'ReWork: Change the Way You Work Forever',

    description: 'How to Run and Manage a Business',
    link: 'https://amzn.to/3SMAUni',
  },
  
];
