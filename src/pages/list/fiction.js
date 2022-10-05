import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {  Page, Seo } from "gatsby-theme-portfolio-minimal";



export default function TitlebarBelowMasonryImageList() {
  return (
    <Page>
      
    <Box sx={{ml:25, display:'inline-flex'}}>
      <ImageList cols={2} gap={18}>
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
    </Page>
  );
}

const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/71IIC0n4cBL.jpg',
    title: 'Einstein: His Life and Universe',
    description: 'Marvel and Flaws of Einstein',
    link: 'https://amzn.to/3Cw8Tec',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41av+82SGxL.jpg',
    title: 'THE LAST MAN WHO KNEW EVERYTHING: THE LIFE AND TIMES OF ENRICO FERMI, FATHER OF THE NUCLEAR AGE',
    description: 'Father of Nuclear Age',
    link: 'https://amzn.to/3UYXNFE',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81F7f5hAXVL.jpg',
    title: 'Surely youre Joking Mr Feynman: Adventures of a Curious Character',
    description: 'Feynman Life Stories',
    link: 'https://amzn.to/3USZGnk',
  }, 

  {
    img: 'https://m.media-amazon.com/images/I/61fp0RQR+9L.jpg',
    title: 'The Almanack Of Naval Ravikant: A Guide to Wealth and Happiness',
    description: 'Improving Your Happiness',
    link: 'https://amzn.to/3e4UgFi',
  }, 
  {
    img: 'https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg',
    title: 'The Diary of a Young Girl',
    description: 'Understand War Horrors',
    link: 'https://amzn.to/3Ed2GFl',
  }, 

  {
    img: 'https://m.media-amazon.com/images/I/81X6Fh2KL9L.jpg',
    title: 'LEONARDO DA VINCI: The Biography',
    description: 'Life of a Polymath',
    link: 'https://amzn.to/3CrqT8v',
  }, 

];


