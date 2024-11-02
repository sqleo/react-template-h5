import React from 'react';
import './App.css';
import { useWeappLauncher } from './hooks/useMiniProgram';

function App() {
  const { isWeixin, isDesktop, openWeapp } = useWeappLauncher();
  return (
    <div className="App-header">
      {isWeixin && (
        <div id="wechat-web-container" className="wechat-web-container">
          <p>点击以下按钮打开 “填入你的小程序名称”</p>
          <wx-open-launch-weapp id="launch-btn" username="gh_eaaebf8e9288" path="pages/user/login/login?scene=a_352828_1263600">
            <template>
              <button style={{ width: 200, height: 45, textAlign: 'center', fontSize: 17, display: 'block', margin: '0 auto', padding: '8px 24px', border: 'none', borderRadius: 4, backgroundColor: '#07c160', color: '#fff' }}>
                打开小程序
              </button>
            </template>
          </wx-open-launch-weapp>
        </div>
      )}
      {isDesktop && (
        <div id="desktop-web-container" className="desktop-web-container">
          <p>请在手机打开网页链接</p>
        </div>
      )}
      {!isWeixin && !isDesktop && (
        <div id="public-web-container" className="public-web-container">
          <p>请使用微信打开以访问小程序</p>
          <a id="public-web-jump-button" href="javascript:" className="weui-btn weui-btn_primary" onClick={openWeapp}>打开小程序</a>
        </div>
      )}
    </div>
  );
}

export default App;
