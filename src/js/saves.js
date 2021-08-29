/**
 *
 * Handles the saves of an esoteric enterprises character
 *
 */

export class Saves {
  stun;
  poison;
  hazard;
  machine;
  magic;

  constructor(stun, poison, hazard, machine, magic) {
    this.stun = stun;
    this.poison = poison;
    this.hazard = hazard;
    this.machine = machine;
    this.magic = magic;
  }

  toString() {
    return `Saves :
    Stun : ${this.stun}
    Poison : ${this.poison}
    Hazard : ${this.hazard}
    Machine : ${this.machine}
    Magic : ${this.magic}`;
  }
}
