import React from 'react';

function App() {
  const flatten = [1, 2, [3, [4]]];
  const temp: string = '123123';

  return (
    <div>
      {flatten}
      {temp}
    </div>
  );
}

export default App;
