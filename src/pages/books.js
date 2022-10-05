import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {  Page, Seo } from "gatsby-theme-portfolio-minimal";
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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function Books() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };



  return (
    <>
      <Seo title="Recommended Reading List" useTitleTemplate={true} noIndex={true} />
    
      <Page>
      <center>
    
        <Typography variant="h2" gutterBottom>
        Recommended Reading List
      </Typography>
      <Typography variant="h6" gutterBottom>
      A list of Books that I would recommend for reading </Typography>

      <Typography variant="subtitle2" gutterBottom>
      <i>Last Updated on 4th Oct 2022</i>
      </Typography>
      <br></br>

      <Box sx={{ width: '80%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab label="Business Biographies" {...a11yProps(0)} />
          <Tab label="Business Management" {...a11yProps(1)} />
          <Tab label="Decision Making" {...a11yProps(2)} />
          <Tab label="Startup" {...a11yProps(3)} />
          <Tab label="Finance and Investment" {...a11yProps(4)} />
          <Tab label="Productivity" {...a11yProps(5)} />
          <Tab label="World History" {...a11yProps(6)} />
          <Tab label="Biographies" {...a11yProps(7)} />
          <Tab label="Science" {...a11yProps(8)} />
          <Tab label="Science Fiction" {...a11yProps(9)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <BizBio/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Biz/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <DM/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Start/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        <Fin/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
        <Prod/>
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
        <His/>
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
        <Bio/>
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
        <Phy/>
        </TabPanel>
        <TabPanel value={value} index={9} dir={theme.direction}>
          <Fic/>
        </TabPanel>
        
      </SwipeableViews>
    </Box>


              </center>

      </Page>
    </>
  );
}
