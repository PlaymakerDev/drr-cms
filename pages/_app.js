import React from "react";
import "@/styles/globals.css";
// REACT REDUX-PROVIDER
import { wrapper } from '@/store'
import { Provider } from "react-redux";
// ANTD PROVIDER
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

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

export default App
