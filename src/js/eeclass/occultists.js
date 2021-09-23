/**
 *
 * Criminal class
 *
 */

import { Character } from "../character";
import { Health } from "../health";
import { Saves } from "../saves";
import { Skills } from "../skills";

export class Occultist extends Character {
  // Dice for health
  fleshDie = 4;
  gritDie = 4;

  // Base saves values
  baseStun = 13;
  basePoison = 13;
  baseHazard = 16;
  baseMachine = 13;
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
      `******Spellbook & Starting Spells******\n` +
      `Spooks  aren’t  members  of  mainstream human society\n` +
      `They don’t have bank accounts, valid ID or social security numbers.\n` +
      `Often, they don’t even look human enough to blend into a crowd.\n` +
      `They can’t work in any but the shadiest  industries,  and  can’t  interact  with  most  humans without  attracting  unwanted  attention.\n` +
      `Because  of  this,  a Spook’s Resources Level doesn’t rise to match their level;\n` +
      `it stays at a default of 1 instead, regardless of their level.\n\n` +
      `*******Monstrous  Powers********\n` +
      `Every  Spook  possesses  innate supernatural  abilities,  and  develop  more  as  they  grow  in power.\n` +
      `These abilities are classified as Monstrous Powers, and provide the character a benefit that is either always active, or else can be used whenever they wish\n` +
      `At first level, they have a single Monstrous Power.\n` +
      `By default, it is assumed that a starting PC’s monstrous power is randomly selected\n` +
      `but if the GM allows non-random character creation you may instead pick any appropriate monstrous power.\n\n` +
      `*******Supernatural  Origins********\n` +
      `In  addition  to  this,  Spook  have  an origin  that  defines  where  they  came  from  and  how  their biology (or lack of biology) functions. \n` +
      `A starting Spook must select (or randomly determine) one of the following options; \n` +
      `Construct, Ghostly, Fey, Human, Living, Mineral, Plant, or Undead. Each origin will give the monster certain weaknesses and requirements, and sometimes a few perks as well. \n`
    );
  }
}
