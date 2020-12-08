//getters and setters

const a = function (x) {
  this.x = x;
};
a.prototype = {
  getX() {
    return this.x;
  },
};

const b = function (x, y) {
  this.y = y;
  a.call(this.x);
  b.prototype = {
    getY() {
      return this.y;
    },
  };
};

const newB = new b("x", "y");
newB.getX();
newB.getY();
