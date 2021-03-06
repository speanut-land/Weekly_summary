Function.prototype.newCall = function (context, ...parameter) {
  if (typeof context === "object") {
    context = context || window;
  } else {
    context = Object.create(null);
  }
  let fn = Symbol();
  context[fn] = this;
  context[fn](...parameter);
  delete context[fn];
};
Function.prototype.newBind = function (context, ...innerArgs) {
  let ctx = this;
  bound.prototype = this;
  function bound(...finalArgs) {
    return ctx.call(context, ...innerArgs, ...finalArgs);
  }
  return bound;
};

let person = {
  name: "Abiel",
};

function sayHi(age, sex) {
  console.log(this.name, age, sex);
  return 1;
}
let personSayHi = sayHi.newBind(person, 25);
console.log(new personSayHi());

const cccc = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
const unboundGetX = cccc.getX;
const boundGetX = unboundGetX.bind(cccc);
console.log(new boundGetX());

function cc(params) {}
console.log(new cc());
