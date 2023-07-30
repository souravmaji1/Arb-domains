import './styles/styles.css';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from '../src/components/Navigation';

const darkTheme = createTheme({
  typography: {
    fontFamily: 'monospace'
  },
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Your identity across web3, one name for all your crypto addresses, and your decentralised website."
        />
        <title>ARB Direct</title>
       <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>
       <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap" rel="stylesheet"></link>
       <link href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Navigation />
      </ThemeProvider>
    </>
  )
}

export default MyApp