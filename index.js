const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const copy = (Array.isArray(collection)) ? [...collection] : Object.values(collection);

      for (let i = 0; i < copy.length; ++i) {
        callback(copy[i]);
      }

      return collection;
    },

    map: function(collection, callback) {
      const copy = (Array.isArray(collection)) ? [...collection] : Object.values(collection);
      const mapped = [];

      for (let i = 0; i < copy.length; ++i) {
        mapped.push(callback(copy[i]));
      }

      return mapped;
    },

    reduce: function(collection, callback, accum) {
      let reduced = accum || collection[0];

      for (let i = 0; i < collection.length; ++i) {
        if (arguments.length < 3 && i == 0) continue;

        reduced = callback(reduced, collection[i], collection);
      }

      return reduced;
    },
    // fi.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    find: function(collection, cb) {
      for (let i = 0; i < collection.length; ++i) {
        if (cb(collection[i])) return collection[i];
      }
    },

    filter: function(collection, cb) {
      const filtered = [];

      for (let i = 0; i < collection.length; ++i) {
        if (cb(collection[i])) filtered.push(collection[i]);
      }  

      return filtered;
    },

    size: function(obj) {
      return (Array.isArray(obj)) ? obj.length : Object.keys(obj).length;
    },

    first: function(array, num) {
      return (arguments.length > 1) ? array.slice(0, num) : array[0];
    },

    last: function(array, num) {
      return (arguments.length > 1) ? array.slice(array.length - num, array.length) : array[array.length - 1];
    },

    compact: function(array) {
      return this.filter(array, el => !!el);
    },

    sortBy: function(array, cb) {
      const sorted = [];
      const copy = [...array];

      return copy.sort((a, b) => cb(a) - cb(b));
    },

    flatten: function(array, shallow = false) {
      let flat = [];
  
      array.forEach(el => {
        if (shallow) {
          flat = flat.concat(el);
          return;
        }

  	    if (Array.isArray(el)) {
    	    flat = flat.concat(this.flatten(el, shallow));
        } else {
    	    flat.push(el);
        }
      });
  
      return flat;
    },

    uniq: function(array, isSorted, callback) {
      const unique = [];
      const mutants = [];

      array.forEach((el) => {
        if (arguments.length < 3) {
          if (!unique.includes(el)) unique.push(el);
        } else {
          const res = callback(el);
          if (!unique.includes(el) && !mutants.includes(res)) {
            unique.push(el);
            mutants.push(res);
          }
        }
      });

      return unique;
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      const fs = [];

      for (const key in obj) {
        if (typeof obj[key] === 'function') fs.push(key);
      }

      return fs.sort();
    }

  }
})()

fi.libraryMethod()
