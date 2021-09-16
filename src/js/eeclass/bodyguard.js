/**
 *
 * Bodyguard class
 *
 */

import { Character } from "../character";
import { Health } from "../health";
import { Saves } from "../saves";
import { Skills } from "../skills";

export class Bodyguard extends Character {
  // Dice for health
  fleshDie = 10;
  gritDie = 10;

  // Base saves values
  baseStun = 10;
  basePoison = 8;
  baseHazard = 13;
  baseMachine = 9;
  baseMagic = 12;

  // Base skills values
  baseAthletics = 1;
  baseCharm = 1;
  baseContact = 1;
  baseDriving = 1;
  baseForensics = 1;
  baseMedicine = 1;
  basePerception = 3;
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
   * @returns {Number} Constitution Modifier of the character
   */
  get constitutionModifier() {
    return super.constitutionModifier + 1;
  }

  /**
   *
   * @returns {Number} Perception Skill of the character
   */
  get perception() {
    let perception = this.skills.perception + this.wisdomModifier;
    perception = perception < 3 ? 3 : perception > 6 ? 6 : perception;
    return perception;
  }

  /**
   *
   * @returns {String} Output of base character information
   */
  toString() {
    return (
      `${super.toString()}` +
      `******Improved  Perception****** (CALCULATED)\n` +
      `Due to their finely-honed sense of danger, a bodyguard starts out with a 3-in-6 chance at the Perception skill, that slowly improves as they gain levels\n\n` +
      `***Greater  Carrying  Capacity***\n` +
      `Furthermore, bodyguards are used to working while weighed down with body-armour, weapons and other equipment, even when others are less well equipped. \n` +
      `They calculate encumbrance as if they were carrying 5 less items than they actually are (effectively, they are one step less encumbered than a non-bodyguard would be)\n\n` +
      `******Combat Manoeuvres******\n` +
      `Like Mercenaries, bodyguards tend to be familiar with a wide variety of combat styles.\n` +
      `They take no penalty when making the Fight Defensively, Fight Recklessly, Go for the Kill, and Aim combat actions.\n` +
      `Likewise, a bodyguard can take the Covering Fire combat action with a pistol, standard rifle, marksman’s rifle, or shotgun.\n\n` +
      `******Better Constitution****** (CALCULATED)\n` +
      `Lastly, a bodyguard is better able to cope with pain and injury. They treat their Constitution modifier as one point better\n`
    );
  }
}
