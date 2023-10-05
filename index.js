function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, function (element) {
      newArray.push(callback(element));
    });
    return newArray;
  }
  
  function myReduce(collection, callback, acc) {
    let accumulator = acc !== undefined ? acc : (Array.isArray(collection) ? collection[0] : undefined);
  let startIndex = acc !== undefined ? 0 : 1;

  if (Array.isArray(collection)) {
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    const values = Object.values(collection);
    for (let i = startIndex; i < values.length; i++) {
      accumulator = callback(accumulator, values[i]);
    }
  }

  return accumulator;
  }
  
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const newArray = [];
    myEach(collection, function (element) {
      if (predicate(element)) {
        newArray.push(element);
      }
    });
    return newArray;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(array, n) {
    if (n !== undefined) {
      return array.slice(0, n);
    } else {
      return array[0];
    }
  }
  
  function myLast(array, n) {
    if (n !== undefined) {
      return array.slice(-n);
    } else {
      return array[array.length - 1];
    }
  }
  
  function mySortBy(array, callback) {
    return array.slice().sort(function (a, b) {
      return callback(a) - callback(b);
    });
  }
  
  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return newArr.concat(...array);
    } else {
      for (let element of array) {
        if (Array.isArray(element)) {
          myFlatten(element, false, newArr);
        } else {
          newArr.push(element);
        }
      }
      return newArr;
    }
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return myMap(myKeys(object), function (key) {
      return object[key];
    });
  }
  