function transformToObjects(numbers) {
  
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array');
    }
  

    const objectsArray = numbers.map(number => {
      return { val: number };
    });
  
    return objectsArray;
  }

  const inputArray = [1, 2, 3];
  const transformedArray = transformToObjects(inputArray);
  console.log(transformedArray);