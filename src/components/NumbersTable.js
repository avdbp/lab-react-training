import React from 'react';

const NumbersTable = ({ limit }) => {
  // Create an array of numbers from 1 to the specified limit
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  // Function to chunk the numbers into rows of 5
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Divide the numbers into rows of 5
  const rows = chunkArray(numbers, 5);

  return (
    <div className="numbers-table">
      <table>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((number) => (
                <td key={number} className={number % 2 === 0 ? 'even' : 'odd'}>
                  {number}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumbersTable;
