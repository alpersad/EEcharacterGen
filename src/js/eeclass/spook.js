/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
import { Health } from "../health";
import { Saves } from "../saves";
import { Skills } from "../skills";

export class Spook extends Character {
  // Dice for health
  fleshDie = 6;
  gritDie = 6;

  // Base saves values
  baseStun = 13;
  basePoison = 12;
  baseHazard = 15;
  baseMachine = 13;
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
   * @returns {String} Output of base character information
   */
  toString() {
    return (
      `${super.toString()}` +
      `******Limited  Resources******\n` +
      `An occultist starts out with a spellbook for free containing the spells that they  know.\n` +
      `At first level, the occultist knows a single spell of first rank (roll on table 40), and can gain extra spells ` +
      `known by taking one or more  of  \nthe  ‘grimoire’  items  as  part  of  their  equipment allowance\n` +
      `Whenever the occultist gains a level, they pick a spell  rank,  and  learn  a  randomly-chosen  new  spell  of  that rank, which can be added to their spellbook for free. \n` +
      `here is a limitation here, however; they cannot pick a spell of a rank 2 or more higher than their level  \n` +
      `(so, for example, at 2nd level they cannot gain a spell of 4th rank or higher, and likewise at 3rd level they cannot gain a spell of 5th rank or higher)\n\n` +
      `*******Memorizing Spells & Spell Slots********\n` +
      `At first level, they have a spell-slot which they can safely memorize a single first-rank spell  in.\n` +
      `Memorizing  a  spell  takes  a  full  turn  of  magical activity. \n` +
      `As the occultist gains levels, they will gain new spell-slots  to  memorize  spells  in.\n` +
      `It  takes  a  round  to  cast  a memorized spell, or a full turn to cast an un-memorized spell from the occultist’s spellbook. \n`
    );
  }
}
