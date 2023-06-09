function myMap(collection, callback) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      let keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        result.push(callback(collection[key], key, collection));
      }
    }
  
    return result;
  }
  

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      let keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        callback(collection[key], key, collection);
      }
    }
  
    return collection;
  }

  function myReduce(collection, callback, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      acc = Object.values(collection)[0];
      startIdx = 1;
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      let keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        let key = keys[i];
        acc = callback(acc, collection[key], collection);
      }
    }
  
    return acc;
  }
  
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      let keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
  
    return undefined;
  }
  function myFilter(collection, predicate) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      let keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
  
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }

  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n = 1) {
  if (n === 1) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  