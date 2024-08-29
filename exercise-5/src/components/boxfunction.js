import React, { useState } from 'react';

function ColorsBox() {
  const [color, setColor] = useState('blue');
  const [height, setHeight] = useState(100);

  const changeColorAndSize = () => {
    setColor(prevColor => prevColor === 'blue' ? 'green' : 'blue');
    setHeight(prevHeight => prevHeight * 2);
  }

  return (
    <div>
      <div style={{ backgroundColor: color, height: height, width: 100 }}></div>
      <button onClick={changeColorAndSize}>Change Color and Size</button>
    </div>
  );
}

export default ColorsBox;
