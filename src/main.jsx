import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import './cssfiles/Dashboard.css'
// import './cssfiles/Header.css'
// import './cssfiles/ChartCard.css'
import './cssfiles/Sidebar.css'
import App from './App.jsx'
import "@fontsource/mulish";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
