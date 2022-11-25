import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const call = async () => {
      const promise = import('core/Api').then(
        (module) => module.v0
      ) as Promise<any>;
      const Api = await promise;
      console.log(Api);
      Api.authenticate();
    };
    call();
  }, []);

  return <div className="App">MFE1</div>;
}

export default App;
