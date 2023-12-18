// App.js

import React from 'react';
import ListModules from './ListModules';
import AddModule from './AddModule';

const App = () => {
  return (
    <div>
      <h1 className='text-5xl text-black font-bold p-4'>Module Management App</h1>
      <AddModule />
      <ListModules />
    </div>
  );
};

export default App;
