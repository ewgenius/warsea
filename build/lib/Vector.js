"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor(x = 0, y = 0) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    get X() {
        return this.x;
    }
    get Y() {
        return this.y;
    }
    set X(value) {
        this.x = value;
    }
    set Y(value) {
        this.y = value;
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    dot(a) {
        this.x *= a;
        this.y *= a;
        return this;
    }
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static dot(v, a) {
        return new Vector(v.x * a, v.y * a);
    }
}
exports.Vector = Vector;
