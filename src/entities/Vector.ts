export default class Vector {
  private x: number = 0;
  private y: number = 0;

  get X() {
    return this.x;
  }

  get Y() {
    return this.y;
  }

  set X(value: number) {
    this.x = value;
  }

  set Y(value: number) {
    this.y = value;
  }

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(v: Vector): Vector {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  dot(a: number): Vector {
    this.x *= a;
    this.y *= a;
    return this;
  }

  static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static dot(v: Vector, a: number) {
    return new Vector(v.x * a, v.y * a);
  }
}
