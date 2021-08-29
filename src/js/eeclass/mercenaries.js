/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
import { Attributes } from "../attributes";
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
    this.attributes = new Attributes();
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
}
