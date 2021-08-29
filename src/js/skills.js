/**
 *
 * Handles the Skills of an esoteric enterprises character
 *
 */

export class Skills {
  athletics;
  charm;
  contact;
  driving;
  forensics;
  medicine;
  perception;
  stealth;
  technology;
  translation;
  vandalism;

  constructor(
    athletics,
    charm,
    contact,
    driving,
    forensics,
    medicine,
    perception,
    stealth,
    technology,
    translation,
    vandalism
  ) {
    this.athletics = athletics;
    this.charm = charm;
    this.contact = contact;
    this.driving = driving;
    this.forensics = forensics;
    this.medicine = medicine;
    this.perception = perception;
    this.stealth = stealth;
    this.technology = technology;
    this.translation = translation;
    this.vandalism = vandalism;
  }

  toString() {
    return `Skills : 
      Athletics : ${this.athletics}
      Charm : ${this.charm}
      Contact : ${this.contact}
      Driving : ${this.driving}
      Forensics : ${this.forensics}
      Medicine : ${this.medicine}
      Perception : ${this.perception}
      Stealth : ${this.stealth}
      Technology : ${this.technology}
      Translation : ${this.translation}
      Vandalism :${this.vandalism}`;
  }
}
