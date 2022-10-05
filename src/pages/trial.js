import React from "react";
import {
  Page,
  Seo,
  LegalSection,
} from "gatsby-theme-portfolio-minimal";
import BizBio from '/src/components/Biz-bio';
import Biz from '/src/components/Biz';
import DM from '/src/components/Decmk';
import Start from '/src/components/Startup';
import Fin from '/src/components/Fin';
import Prod from '/src/components/Prod';
import Bio from '/src/components/Bio';
import His from '/src/components/History';
import Phy from '/src/components/Sci';
import Fic from '/src/components/Fiction';
import Typography from '@mui/material/Typography';


export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="books" heading="Privacy Policy" />
      </Page>
    </>
  );
}
