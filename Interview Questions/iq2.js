const obj = {
  a: {
    b: {
      c: 100,
    },
  },
};

//const clone
const obj2 = Object.create(obj);
//hack const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2.a.b.c);
