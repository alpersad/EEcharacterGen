/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
import { Health } from "../health";
import { Saves } from "../saves";
import { Skills } from "../skills";

export class Explorer extends Character {
  // Dice for health
  fleshDie = 6;
  gritDie = 6;

  // Base saves values
  baseStun = 10;
  basePoison = 8;
  baseHazard = 13;
  baseMachine = 9;
  baseMagic = 12;

  // Base skills values
  baseAthletics = 5;
  baseCharm = 1;
  baseContact = 1;
  baseDriving = 1;
  baseForensics = 1;
  baseMedicine = 1;
  basePerception = 1;
  baseStealth = 3;
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
   * @returns {Number} Dexterity Modifier of the character
   */
  get dexterityModifier() {
    return super.dexterityModifier + 1;
  }

  /**
   *
   * @returns {String} Output of base character information
   */
  toString() {
    return (
      `${super.toString()}` +
      `******Improved  Athletics  &  Stealth****** (CALCULATED)\n` +
      `The  Explorer  is  a  nimble character, well trained to adventure into the undercity.\n` +
      `They have a 5-in-6 chance at Athletics\n` +
      `They also have a 3-in-6 chance at Stealth, which will improve as they gain levels and the  dangers  of  the  undercity  train  them  to  remain  safely hidden.\n\n` +
      `*******Improved Dexterity******** (CALCULATED)\n` +
      `All Explorers benefit from improved mobility and are frequently skilled at reducing the weight of gear they carry.\n` +
      `heir training improves their Dexterity modifier by 1.\n\n` +
      `*******Improved Armour Class********\n` +
      `Unless  they  are  surprised,  they  also  improve  their  Armour Class by an additional 1. \n\n` +
      `******Unaccustomed to Violence******\n` +
      `Explorers, unlike other members of  the  occult  underground,  lack  familiarity  with  weapons.\n` +
      `Weapons wielded by an explorer do a dice size of damage less.\n` +
      `(For example, a shotgun normally does d10 damage, but in the hands of an explorer only does d8).\n` +
      `Unarmed attacks, or other ways of fighting that don’t use a weapon, are unaffected.\n`
    );
  }
}
