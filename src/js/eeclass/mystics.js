/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
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

  /**
   *
   * @returns {String} Output of base character information
   */
  toString() {
    return (
      `${super.toString()}` +
      `******Improved Charm****** (CALCULATED)\n` +
      `Mystics start with a basic 1 in 6 chance at Charm, which slowly improves as they gain levels\n\n` +
      `*******Mystic Spellcasting********\n` +
      `A mystic can cast spells, but in a very different fashion to an occultist.\n` +
      `A mystic has a set number of spells known to them. These are all that their patron is willing to  grant  them,  and  they  may  not  learn  any  more  by themselves\n` +
      `To cast a spell, a mystic must spend a round in supplication to their patron, and make a Charm roll to see if the being answers their pleas\n` +
      `If the Charm roll is successful, the spell is cast successfully. If the roll Charm roll fails then roll a d20 on The Fickle Whims Of The Divine (table 36) to determine what has gone wrong.\n\n` +
      `******Starting  Spells******\n` +
      `A  mystic  starts  off  knowing  two  random Rank 1 spells.\n` +
      `Based off these rolls, a mystic’s player should work with the GM come up with a very rough picture of their patron’s nature.\n` +
      `As they mystic gains levels, their patron will grant them additional spells.\n` +
      `Table 7 states which rank spell is learned at each level; a random spell of this rank is learned.\n`
    );
  }
}
