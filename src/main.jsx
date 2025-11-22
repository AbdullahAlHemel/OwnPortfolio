import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Routes';
import FloatingLines from './components/FloatingLines/FloatingLines'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Background Animation */}
    <div className="fixed top-0 left-0 w-screen h-screen -z-10">
      <FloatingLines
        enabledWaves={['top','middle','bottom']}
        lineCount={[7, 9, 10]}
        lineDistance={[8, 6, 4]}
        bendRadius={5.0}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
    </div>  
        <RouterProvider router={router} />
  </React.StrictMode>,
)
