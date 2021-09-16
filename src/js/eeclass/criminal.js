/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
import { Health } from "../health";
import { Saves } from "../saves";
import { Skills } from "../skills";

export class Criminal extends Character {
  // Dice for health
  fleshDie = 6;
  gritDie = 6;

  // Base saves values
  baseStun = 14;
  basePoison = 16;
  baseHazard = 15;
  baseMachine = 14;
  baseMagic = 14;

  // Base skills values
  baseAthletics = 1;
  baseCharm = 1;
  baseContact = 1;
  baseDriving = 1;
  baseForensics = 1;
  baseMedicine = 1;
  basePerception = 1;
  baseStealth = 1;
  baseTechnology = 1;
  baseTranslation = 1;
  baseVandalism = 1;

  constructor(name) {
    super(name);
    this.health = new Health(this.fleshDie, this.gritDie);
    this.saves = new Saves(
      this.baseStun,
      this.basePoison,
      this.baseHazard,
      this.baseMachine,
      this.baseMagic
    );
    this.skills = new Skills(
      this.baseAthletics,
      this.baseCharm,
      this.baseContact,
      this.baseDriving,
      this.baseForensics,
      this.baseMedicine,
      this.basePerception,
      this.baseStealth,
      this.baseTechnology,
      this.baseTranslation,
      this.baseVandalism
    );
  }

  /**
   *
   * @returns {String} Output of base character information
   */
  toString() {
    return (
      `${super.toString()}` +
      `******Improved Skills******\n` +
      `At first level, the criminal gets 6 skill points that are each assigned to a skill.\n` +
      `Each point spent improves the skill chance of the skill it is assigned to by 1, up to the normal maximum of 6-in-6.\n` +
      `At  each  level  thereafter,  the  criminal  can  assign  two  more points to skills.\n` +
      `There  are  11  skills  that  a  criminal  can  assign  points  to: \n` +
      `Athletics,  Charm,  Contacts,  Driving,  Forensics,  Medicine, Perception, Stealth, Technology, Translation and Vandalism.\n\n` +
      `******Well Equipped******\n` +
      `A Criminal gets two extra items in character creation, which must be from the Adventuring Gear list.\n`
    );
  }
}
