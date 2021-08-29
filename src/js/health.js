/**
 *
 * Handles the health of an esoteric enterprises character
 *
 */

import { rollDice } from "./dice";

export class Health {
  flesh;
  grit;

  constructor(fleshDie, gritDie) {
    this.flesh = rollDice(fleshDie);
    this.grit = rollDice(gritDie);
  }

  toString() {
    return `Health :
    Flesh : ${this.flesh}
    Grit : ${this.grit}`;
  }
}
