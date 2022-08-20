import './App.css';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import StickyNavBar from './StickyNavBar';
import HomeContent from './HomeContent';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
const Container = styled.div`
  margin: 5px auto 5px auto;
`;
function App() {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  
  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

   useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <div className="App">
    <header className="App-header">
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
       
          <StickyNavBar />
          <HomeContent />
          <AboutMe />
          <ContactMe />
          <p>
            Ben's Personal Site Coming Soon...
          </p>
     
        </Container>
      </ThemeProvider>
    }
       </header>
      </div>
  );
}

export default App;
