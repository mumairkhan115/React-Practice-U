import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App as AntdApp, ConfigProvider } from "antd";
import 'antd/dist/reset.css'
import App from './App.tsx'
import 'antd-css-utilities/utility.min.css'
import themeTokens from "./config/themeToken";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={themeTokens}>
      <AntdApp>
        <App />
      </AntdApp>  
    </ConfigProvider>
  </StrictMode>,
);