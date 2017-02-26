"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector_1 = require("../lib/Vector");
class Ship {
    constructor() {
        this.pos = new Vector_1.Vector();
        this.speed = new Vector_1.Vector();
    }
    get position() {
        return this.position;
    }
    set position(value) {
        this.pos = value;
    }
    update(delta) {
        this.pos.add(Vector_1.Vector.dot(this.speed, delta));
    }
}
exports.Ship = Ship;
