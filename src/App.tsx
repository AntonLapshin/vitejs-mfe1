import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const call = async () => {
      const Api = await import('core/Api');
      console.log({ Api });
      const v0 = Api.default.v0;
      console.log({ v0 });

      v0.authenticate();
    };
    call();
  }, []);

  return <div className="App">MFE1</div>;
}

export default App;
