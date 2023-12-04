import React from 'react';
import { render } from 'react-dom';
import { ImageProvider } from './ImageContext'; // Import the ImageProvider
import App from './App'; // Import your main application component
import { Provider } from "react-redux";
import store from "./store/store";

render(
  <ImageProvider> {/* Wrap your app with the ImageProvider */}
    <Provider store={store}>
      <App />
    </Provider>
  </ImageProvider>,
  document.getElementById('root')
);
