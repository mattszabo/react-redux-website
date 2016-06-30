const findIndexFromId = (counters, id) => {
  for(let i=0; i < counters.length; i++) {
    if(id === counters[i].id) {
      return i;
    }
  }
  return -1;
}

export { findIndexFromId };
