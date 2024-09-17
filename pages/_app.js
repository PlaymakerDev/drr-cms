import "@/styles/globals.css";
import { ConfigProvider } from 'antd';

import theme from '@/theme/themeConfig';

// STATIC CONFIG
ConfigProvider.config({
  holderRender: (children) => {
    return (
      <ConfigProvider
        prefixCls="ant"
        iconPrefixCls="anticon"
        theme={{
          components: {
            Button: {
              // HOVER
              defaultHoverBorderColor: '#4096ff',
              defaultHoverColor: '#4096ff',
              defaultHoverBg: '#ffffff',
              colorPrimaryHover: '#4096ff',
              // ACTIVE
              defaultActiveBg: '#ffffff',
              defaultActiveBorderColor: '#0958d9',
              defaultActiveColor: '#0958d9',
              colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
              colorPrimaryActive: '#0958d9',
              // PRIMARY
              primaryColor: '#ffffff',
              colorPrimary: '#0075E9',
              colorPrimaryBorder: '#91caff',
            }
          },
          token: {
            fontSize: 14,
            colorPrimary: '#FFFFFF',
            fontFamily: 'IBMPlexSansThai-Regular'
          }
        }}
      >
        {children}
      </ConfigProvider>
    )
  },
})

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default App
