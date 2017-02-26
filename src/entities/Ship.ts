import { Updatable } from '../lib/Updatable';
import {Bounds} from '../lib/Bounds';
import { Vector } from '../lib/Vector';

export class Ship implements Updatable {
  private pos: Vector = new Vector();
  private speed: Vector = new Vector();
  private bounds: Bounds = new Bounds();

  get position() {
    return this.position;
  }

  set position(value: Vector) {
    this.pos = value;
  }

  constructor() {
  }

  update(delta: number) {
    this.pos.add(Vector.dot(this.speed, delta));
  }
}
