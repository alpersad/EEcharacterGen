/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
import { Health } from "../health";
import { Saves } from "../saves";
import { Skills } from "../skills";

export class Mercenary extends Character {
  // Dice for health
  fleshDie = 8;
  gritDie = 8;

  // Base saves values
  baseStun = 14;
  basePoison = 12;
  baseHazard = 15;
  baseMachine = 13;
  baseMagic = 16;

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
      `******Improved Accuracy******\n` +
      `Unlike other classes, the mercenary gets a bonus to their rolls to hit on top of their attribute modifiers. \n` +
      `This bonus starts at +1 and increases as they gain levels.\n\n` +
      `*******Combat  Manoeuvres********\n` +
      `A mercenary  takes  no  penalty  when making the Fight  Defensively,  Fight  Recklessly,  Go  for  the Kill, and Aim combat actions.\n` +
      `A mercenary can take the Covering Fire combat action with a pistol, standard rifle, marksman’s rifle, or shotgun. \n\n` +
      `******Well Equipped******\n` +
      `A mercenary gets two extra items in character creation,  which  must  be  taken  from  the  Melee  Weapons, Ranged Weapons or Armour lists.\n`
    );
  }
}
