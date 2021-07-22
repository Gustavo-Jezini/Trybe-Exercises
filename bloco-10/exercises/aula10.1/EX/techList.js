const techList = (arrayTech , name) => {
  let arrayObj = []
    for(let i = 0; i < arrayTech.length; i += 1) {
      let obj = {
        tech : "",
        name : name
      };
      obj.tech = arrayTech.sort()[i];
      arrayObj.push(obj);
  }
   if(arrayObj.length === 0) {
    return "Vazio!";
  } else {
      return arrayObj;
  }
}

module.exports = techList;