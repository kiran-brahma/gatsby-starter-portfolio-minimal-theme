import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: 440 }}>
      <ImageList cols={2} gap={5}>
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
    img: 'https://m.media-amazon.com/images/I/41iJa8aOfCL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Innovators: How a Group of Inventors, Hackers, Geniuses and Geeks Created the Digital Revolution',
    author: 'Walter Isaacson',
    description: 'History of Technology Innovation ',
    link: 'https://amzn.to/3Rj4Bfj',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41x7YA9mk4L.jpg',
    title: 'Shoe Dog: A Memoir by the Creator of Nike',
    author: 'Phil Knight',
    description: 'The Story of Nike',
    link: 'https://amzn.to/3cLD7zY',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61hQfYLCLrL.jpg',
    title: 'Failing to Succeed: The Story of India’s First E-Commerce Company',
    author: 'Charles Deluvio',
    description: 'Failure Lessons',
    link: 'https://amzn.to/3SS9Q5L',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71QaArYs96L.jpg',
    title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
    author: 'John Carreyrou',
    description: 'Epic Silicon Valley Fraud',
    link: 'https://amzn.to/3rtbM9f',
  },
  {
    img: 'https://m.media-amazon.com/images/I/91AtxywmfZL.jpg',
    title: 'Skunk Works: A Personal Memoir of My Years of Lockheed',
    author: 'Darren Richardson',
    description: 'Development of High Risk Products',
    link: 'https://amzn.to/3RMD71v',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71LtiB5XUcL.jpg',
    title: 'Business Adventures',
    author: 'John Brooks',
    description: 'Stories to learn from',
    link: 'https://amzn.to/3Rj4Bfj',
  },
  {
    img: 'https://m.media-amazon.com/images/I/51mHDriUacL.jpg',
    title: 'STEVE JOBS',
    author: 'Walter',
    description: 'Story of Steve Jobs',
    link: 'https://amzn.to/3rq9ibQ',
  },
  {
    img: 'https://m.media-amazon.com/images/I/819JSdLa3OL.jpg',
    title: 'Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration',
    author: 'Philipp Berndt',
    description: 'The Pixar Story',
    link: 'https://amzn.to/3eawKGR',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61JOJxbU5dL.jpg',
    title: 'Only the Paranoid Survive',
    author: 'Jen P.',
    description: 'Intel Product Transition Story',
    link: 'https://amzn.to/3ydOwzO',
  },
  
];
