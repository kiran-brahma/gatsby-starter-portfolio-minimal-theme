import React from "react";
import {  Page, Seo } from "gatsby-theme-portfolio-minimal";
import BizBio from '/src/components/Biz-bio';
import Biz from '/src/components/Biz';
import DM from '/src/components/Decmk';
import Start from '/src/components/Startup';
import Fin from '/src/components/Fin';
import Prod from '/src/components/Prod';
import Bio from '/src/components/Bio';



import Typography from '@mui/material/Typography';

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Recommended Reading List" useTitleTemplate={true} noIndex={true} />
    
      <Page>

     
        <center>
        <Typography variant="h2" gutterBottom>
        Recommended Reading List
      </Typography>
      <Typography variant="h6" gutterBottom>
      A list of Books that I would recommend for reading. I break the list down into different topics and you can choose to read the book that might interest you.
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
      <i>Last Updated on 4th Oct 2022</i>
      </Typography>
      <br></br>
        <Typography variant="h4" gutterBottom>
        Business Biograhies
      </Typography>
          <BizBio/>
          <br></br>
        <Typography variant="h4" gutterBottom>
        Business Management
      </Typography>
          <Biz/>
          <br></br>
        <Typography variant="h4" gutterBottom>
        Decision Making
      </Typography>
          <DM/>
          <br></br>
        <Typography variant="h4" gutterBottom>
        New Business
      </Typography>
          <Start/>
          <br></br>
        <Typography variant="h4" gutterBottom>
        Finance and Investment
      </Typography>
          <Fin/>
          <br></br>
        <Typography variant="h4" gutterBottom>
        Productivity
      </Typography>
          <Prod/>
          <br></br>
        <Typography variant="h4" gutterBottom>
        Biographies
      </Typography>
          <Bio/>
          
          
          

          
          
          </center>

      </Page>
    </>
  );
}
