import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 400 }}>
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
    img: 'https://m.media-amazon.com/images/P/B079ZLKX8J.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'On Grand Strategy ',
  author: 'John Lewis Gaddis',
    description: 'History Lessons ',
    link: 'https://amzn.to/3fF1Vuy',
  },
  {
    img: 'https://m.media-amazon.com/images/I/618XGVFYlwL.jpg',
    title: 'How to Win Friends and Influence People',
    author: 'Phil Knight',
    description: 'Improve Your EQ skills',
    link: 'https://amzn.to/3y9ToWz',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71dofHp-InL.jpg',
    title: 'WHAT GOT YOU HERE WONT GET YOU THERE: HOW SUCCESSFUL PEOPLE BECOME EVEN MORE SUCCESSFUL',
    author: 'Charles Deluvio',
    description: 'Failure Lessons',
    link: 'https://amzn.to/3M6Lp2g',
  },
 

  
];
