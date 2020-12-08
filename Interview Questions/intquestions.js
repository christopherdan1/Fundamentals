const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this; //returns the entire object back like so:
    //obj.getA().obj.getB();
  },
  getB() {
    console.log(this.b);
  },
};
obj.getA().getB();

/*
[1,3].print(); 

Array.prototype.print =  () =>{
  let result = '';
  this.forEach(elem => {
    result += `${elem},`;
  }console.log(result);)
}
*/
