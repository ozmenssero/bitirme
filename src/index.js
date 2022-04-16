import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CanvasProvider} from "./CanvasContext"
import {ImageProvider} from "./ImageContext"
import {AutoZoomCanvasProvider} from "./AutoZoomCanvasContext"
import {APIContextProvider} from "./APIContext"

ReactDOM.render(
  <React.StrictMode>
      <ImageProvider>
    <CanvasProvider>
      <AutoZoomCanvasProvider>
  <APIContextProvider>

        <App />
  </APIContextProvider>
      </AutoZoomCanvasProvider>
    </CanvasProvider>
      </ImageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

