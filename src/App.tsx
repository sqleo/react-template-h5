import React, { Suspense } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { SpinLoading } from 'antd-mobile';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App-header">
      <Suspense fallback={<SpinLoading />}>
        {element}
      </Suspense>
    </div>
  );
}

export default App;
