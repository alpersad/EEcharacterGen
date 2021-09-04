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

export class Mystic extends Character {
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

  /**
   *
   * @returns {Number} Charm Save of the character
   */
  get charm() {
    let charm = this.skills.charm + this.charismaModifier + 1;
    charm = charm < 1 ? 1 : charm > 6 ? 6 : charm;
    return charm;
  }
}
