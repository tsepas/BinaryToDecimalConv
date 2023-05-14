import React, { useState } from 'react';

function BinaryToDecimal() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');

  const convertBinaryToDecimal = () => {
    let decimal = 0;
    let binaryArray = binary.split('').reverse();
    binaryArray.forEach((digit, index) => {
      decimal += parseInt(digit) * Math.pow(2, index);
    });
    setDecimal(decimal);
  };

  return (
    <div>
      <h2>Binary to Decimal Converter</h2>
      <label htmlFor="binaryInput">Enter a binary number:</label>
      <input type="text" id="binaryInput" value={binary} onChange={(e) => setBinary(e.target.value)} />
      <button onClick={convertBinaryToDecimal}>Convert</button>
      {decimal && <p>The decimal equivalent is: {decimal}</p>}
    </div>
  );
}

export default BinaryToDecimal;
