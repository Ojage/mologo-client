import React from 'react';
import { render } from 'react-dom';
import { ImageProvider } from './ImageContext'; // Import the ImageProvider
import App from './App'; // Import your main application component

render(
  <ImageProvider> {/* Wrap your app with the ImageProvider */}
    <App />
  </ImageProvider>,
  document.getElementById('root')
);
