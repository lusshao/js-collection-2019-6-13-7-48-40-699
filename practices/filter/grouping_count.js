'use strict';

function grouping_count(collection) {

  //implement here
  let res= {};
  collection.forEach( num =>{
    const condition = (number) => number === num;
    if(!res.hasOwnProperty(""+num)){
      let sum = collection.filter(condition).length;
      res[num+""] = sum;
    }
  })
  return res;
}

module.exports = grouping_count;
