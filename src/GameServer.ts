import { Updatable } from './lib/Updatable';
import { Ship } from './entities/Ship';

export class GameServer {
  private updateTimer = null;
  private serverTime = null;

  private ships: Map<string, Ship> = new Map();

  start() {
    this.serverTime = Date.now();
    this.updateTimer = setInterval(() => {
      const now = Date.now();
      this.update(now - this.serverTime);
      this.serverTime = now;
    }, 1000);
  }

  stop() {
    if (this.updateTimer) {
      clearInterval(this.updateTimer);
    }
  }

  update(delta: number) {
    this.ships.forEach(ship => {
      ship.update(delta);
    });
  }
}
