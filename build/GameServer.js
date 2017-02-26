"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameServer {
    constructor() {
        this.updateTimer = null;
        this.serverTime = null;
        this.ships = new Map();
    }
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
    update(delta) {
        this.ships.forEach(ship => {
            ship.update(delta);
        });
    }
}
exports.GameServer = GameServer;
