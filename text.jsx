 
import React, { useState, Suspense } from 'react';

function App() {
  const [Component, setComponent] = useState(null);

  const loadComponent = async (componentName) => {
    const componentMap = {
      ComponentOne: () => import('./ComponentOne'),
      ComponentTwo: () => import('./ComponentTwo'),
      ComponentThree: () => import('./ComponentThree'),
    };

    const { default: LoadedComponent } = await componentMap[componentName]();
    setComponent(() => LoadedComponent);
  };

  return (
    <div>
      <button onClick={() => loadComponent('ComponentOne')}>Load Component One</button>
      <button onClick={() => loadComponent('ComponentTwo')}>Load Component Two</button>
      <button onClick={() => loadComponent('ComponentThree')}>Load Component Three</button>
      {Component && (
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      )}
    </div>
  );
}

export default App;
