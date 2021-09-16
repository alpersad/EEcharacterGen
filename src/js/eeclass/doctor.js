/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
import { Health } from "../health";
import { Saves } from "../saves";
import { Skills } from "../skills";

export class Doctor extends Character {
  // Dice for health
  fleshDie = 6;
  gritDie = 6;

  // Base saves values
  baseStun = 14;
  basePoison = 11;
  baseHazard = 16;
  baseMachine = 12;
  baseMagic = 15;

  // Base skills values
  baseAthletics = 1;
  baseCharm = 1;
  baseContact = 1;
  baseDriving = 1;
  baseForensics = 1;
  baseMedicine = 5;
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
      `******Improved Medicine****** (CALCULATED)\n` +
      `Doctors start out with a 5-in-6 chance at the  Medicine  skill,  representing  the  fact  that  they  actually have professional experience in the medical field.\n\n` +
      `***Automatic  Healing  Pool***\n` +
      `Furthermore,  unlike  other characters,  doctors  can  treat  their  allies  wounds  far  more effectively.\n` +
      `When they have proper tools and space to work, they can spend a turn treating injuries and immediately heal their patient by a single point of flesh\n` +
      `This  level  of  focus  is  difficult,  and  can’t  be  maintained indefinitely.\n` +
      `At first level, they can heal up to 5 flesh each day in this way; this amount increases as they gain levels.\n` +
      `Things  without  animal  biology  that  can’t  be  healed  by  a Medicine skill roll can’t be healed in this way.\n\n` +
      `******Medical Experiments:******\n` +
      `Finally, a doctor with time, materials and a laboratory to work in can attempt all manner of medical marvels.\n` +
      `The precise details vary, and depend more on player inventiveness  than  specific  mechanics;  see  the  section  on Medical Experiments on pages 58-59 for more details. \n`
    );
  }
}
