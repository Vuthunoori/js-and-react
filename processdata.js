function processData(...args) {
  
  const arrays = args.filter(arg => Array.isArray(arg));
  const objects = args.filter(arg => typeof arg === 'object' && !Array.isArray(arg));

  
  const combinedArray = arrays.reduce((acc,arr)=>[...acc,...arr],[]);

  
  const firstArrayCopy = [...(arrays[0] || [])];


  const sumOfNumbers = combinedArray.reduce((total, num) => total + num, 0);


  const mergedObject = objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});

  return {
    combinedArray,
    firstArrayCopy,
    sumOfNumbers,
    mergedObject
  };
}


const result = processData(
  [1, 2, 3],
  { name: 'lahari' },
  [4, 5],
  { age: 21 },
  [6, 7, 8]
);

