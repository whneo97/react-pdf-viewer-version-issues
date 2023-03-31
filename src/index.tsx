import ReactDOM from 'react-dom';
import { useEffect } from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const pdfjsDistVersion = process.env.REACT_APP_PDFJS_DIST_VERSION
const workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min-${pdfjsDistVersion}.js`;
const fileUrl = `${process.env.PUBLIC_URL}/test.pdf`

const PDFReactViewer = () => {
  useEffect(() => console.log(`React PDF Viewer loaded with version ${pdfjsDistVersion}`), [])
  return <Worker workerUrl={workerSrc}>
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPlugin()]}/>
         </Worker>
}

ReactDOM.render(
  <>
    <div style={{height: '40px', fontSize: '20pt', textAlign: 'center'}}>
      <code>pdfjs-dist</code> Version:<span>&nbsp;</span>
        <a href={`https://www.npmjs.com/package/pdfjs-dist/v/${pdfjsDistVersion}`}>
          <b>{pdfjsDistVersion}</b>
        </a>
        <span>&nbsp;</span>({process.env.NODE_ENV} mode)
    </div>
    <PDFReactViewer/>
  </>, 
  document.getElementById('root')
);