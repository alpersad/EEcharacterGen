/**
 *
 *  Base class for creating a character
 *  All classes should inherit from this class
 *
 */

import { Attributes } from "./attributes";

export class Character {
  name;
  level = 1;
  health;
  saves;
  skills;
  attributes;
  baseEquipment = 5;
  baseResource = 1;
  baseArmourClass = 10;
  equipmentList = [];

  /**
   *
   * @param {String} name Name of character
   */
  constructor(name) {
    this.name = name;
    this.attributes = new Attributes();
  }

  /**
   *
   * @returns {String} Output of base character information
   */
  toString() {
    let equipmentString = `--------Equipment List--------\n`;
    this.equipmentList.forEach(equipment => {
      equipmentString += `${equipment.name} - ${equipment.rare ? "RARE" : ""} ${
        equipment.light ? "LIGHT" : ""
      }\n`;
      equipmentString += `${equipment.description}\n\n`;
    });
    equipmentString += `\n`;
    return (
      `${this.name}\n` +
      `--------Attributes-------\n` +
      `Strength : ${this.strength}\n` +
      `\tStr Modifer : ${this.strengthModifier}\n` +
      `Dexterity : ${this.dexterity}\n` +
      `\tDex Modifier : ${this.dexterityModifier}\n` +
      `Constitution : ${this.constitution}\n` +
      `\tCon Modifier : ${this.constitutionModifier}\n` +
      `Intelligence : ${this.intelligence}\n` +
      `\tInt Modifier : ${this.intelligenceModifier}\n` +
      `Wisdom : ${this.wisdom}\n` +
      `\tWis Modifier : ${this.wisdomModifier}\n` +
      `Charisma : ${this.charisma}\n` +
      `\tCha Modifier : ${this.charismaModifier}\n\n` +
      `--------Health--------\n` +
      `Flesh : ${this.flesh}\n` +
      `Grit : ${this.grit}\n\n` +
      `--------Saves--------\n` +
      `Stunning :${this.stun}+\n` +
      `Poison :${this.poison}+\n` +
      `Hazard :${this.hazard}+\n` +
      `Machines :${this.machine}+\n` +
      `Magic :${this.magic}+\n\n` +
      `--------Skills--------\n` +
      `Athletics :${this.athletics} in 6\n` +
      `Charm :${this.charm} in 6\n` +
      `Contact :${this.contact} in 6\n` +
      `Driving :${this.driving} in 6\n` +
      `Forensics :${this.forensics} in 6\n` +
      `Medicine :${this.medicine} in 6\n` +
      `Perception :${this.perception} in 6\n` +
      `Stealth :${this.stealth} in 6\n` +
      `Technology :${this.technology} in 6\n` +
      `Translation :${this.translation} in 6\n` +
      `Vandalism :${this.vandalism} in 6\n\n` +
      `Equipment : ${this.equipment}\n\n` +
      `Resource Level : ${this.resource}\n\n` +
      `Armour Class : ${this.armourClass}\n\n` +
      `${equipmentString}`
    );
  }

  /**
   *
   * @returns {String} Output of base character information
   */
  toStringBase() {
    return `${this.attributes.toString()}
${this.health.toString()}
${this.saves.toString()}
${this.skills.toString()}
Equipment : ${this.equipment}
Resource Level : ${this.resource}
Armour Class : ${this.armourClass}`;
  }

  doppelganger() {
    this.attributes.doppelganger();
  }

  /**
   *
   * @returns {String} Name of the character
   */
  get name() {
    return this.name;
  }

  /**
   *
   * @returns {Number} Base Strength Value of the character
   */
  get strength() {
    return this.attributes.strength.value;
  }

  /**
   *
   * @returns {Number} Base Strength Modifier of the character
   */
  get strengthModifier() {
    return this.attributes.strength.modifier;
  }

  /**
   *
   * @returns {Number} Base Dexterity Value of the character
   */
  get dexterity() {
    return this.attributes.dexterity.value;
  }

  /**
   *
   * @returns {Number} Base Dexterity Modifier of the character
   */
  get dexterityModifier() {
    return this.attributes.dexterity.modifier;
  }

  /**
   *
   * @returns {Number} Base Constitution Value of the character
   */
  get constitution() {
    return this.attributes.constitution.value;
  }

  /**
   *
   * @returns {Number} Base Constitution Modifier of the character
   */
  get constitutionModifier() {
    return this.attributes.constitution.modifier;
  }

  /**
   *
   * @returns {Number} Base Intelligence Value of the character
   */
  get intelligence() {
    return this.attributes.intelligence.value;
  }

  /**
   *
   * @returns {Number} Base Intelligence Modifier of the character
   */
  get intelligenceModifier() {
    return this.attributes.intelligence.modifier;
  }

  /**
   *
   * @returns {Number} Base Wisdom Value of the character
   */
  get wisdom() {
    return this.attributes.wisdom.value;
  }

  /**
   *
   * @returns {Number} Base Wisdom Modifier of the character
   */
  get wisdomModifier() {
    return this.attributes.wisdom.modifier;
  }

  /**
   *
   * @returns {Number} Base Charisma Value of the character
   */
  get charisma() {
    return this.attributes.charisma.value;
  }

  /**
   *
   * @returns {Number} Base Charisma Modifier of the character
   */
  get charismaModifier() {
    return this.attributes.charisma.modifier;
  }

  /**
   *
   * @returns {Number} Flesh of the character
   */
  get flesh() {
    let flesh = this.health.flesh + this.constitutionModifier;
    return flesh <= 0 ? 1 : flesh;
  }

  /**
   *
   * @returns {Number} Grit of the character
   */
  get grit() {
    let grit = this.health.grit + this.constitutionModifier;
    return grit < 0 ? 0 : grit;
  }

  /**
   *
   * @returns {Number} Stunning Save of the character
   */
  get stun() {
    return this.saves.stun - this.constitutionModifier;
  }

  /**
   *
   * @returns {Number} Poison Save of the character
   */
  get poison() {
    return this.saves.poison - this.constitutionModifier;
  }

  /**
   *
   * @returns {Number} Hazard Save of the character
   */
  get hazard() {
    return this.saves.hazard - this.dexterityModifier;
  }

  /**
   *
   * @returns {Number} Machine Save of the character
   */
  get machine() {
    return this.saves.machine - this.intelligenceModifier;
  }

  /**
   *
   * @returns {Number} Magic Save of the character
   */
  get magic() {
    return this.saves.magic - this.wisdomModifier;
  }

  /**
   *
   * @returns {Number} Athletics Save of the character
   */
  get athletics() {
    let athletics = this.skills.athletics + this.strengthModifier;
    athletics = athletics < 0 ? 0 : athletics > 6 ? 6 : athletics;
    return athletics;
  }

  /**
   *
   * @returns {Number} Charm Save of the character
   */
  get charm() {
    let charm = this.skills.charm + this.charismaModifier;
    charm = charm < 0 ? 0 : charm > 6 ? 6 : charm;
    return charm;
  }

  /**
   *
   * @returns {Number} Contact Save of the character
   */
  get contact() {
    let contact = this.skills.contact + this.charismaModifier;
    contact = contact < 0 ? 0 : contact > 6 ? 6 : contact;
    return contact;
  }

  /**
   *
   * @returns {Number} Driving Save of the character
   */
  get driving() {
    let driving = this.skills.driving + this.dexterityModifier;
    driving = driving < 0 ? 0 : driving > 6 ? 6 : driving;
    return driving;
  }

  /**
   *
   * @returns {Number} Forensics Save of the character
   */
  get forensics() {
    let forensics = this.skills.forensics + this.wisdomModifier;
    forensics = forensics < 0 ? 0 : forensics > 6 ? 6 : forensics;
    return forensics;
  }

  /**
   *
   * @returns {Number} Medicine Save of the character
   */
  get medicine() {
    let medicine = this.skills.medicine + this.intelligenceModifier;
    medicine = medicine < 0 ? 0 : medicine > 6 ? 6 : medicine;
    return medicine;
  }

  /**
   *
   * @returns {Number} Perception Skill of the character
   */
  get perception() {
    let perception = this.skills.perception + this.wisdomModifier;
    perception = perception < 0 ? 0 : perception > 6 ? 6 : perception;
    return perception;
  }

  /**
   *
   * @returns {Number} Stealth Skill of the character
   */
  get stealth() {
    let stealth = this.skills.stealth + this.dexterityModifier;
    stealth = stealth < 0 ? 0 : stealth > 6 ? 6 : stealth;
    return stealth;
  }

  /**
   *
   * @returns {Number} Technology Skill of the character
   */
  get technology() {
    let technology = this.skills.technology + this.intelligenceModifier;
    technology = technology < 0 ? 0 : technology > 6 ? 6 : technology;
    return technology;
  }

  /**
   *
   * @returns {Number} Translation Skill of the character
   */
  get translation() {
    let translation = this.skills.translation + this.intelligenceModifier;
    translation = translation < 0 ? 0 : translation > 6 ? 6 : translation;
    return translation;
  }

  /**
   *
   * @returns {Number} Vandalism Skill of the character
   */
  get vandalism() {
    let vandalism = this.skills.vandalism + this.strengthModifier;
    vandalism = vandalism < 0 ? 0 : vandalism > 6 ? 6 : vandalism;
    return vandalism;
  }

  /**
   *
   * @returns {Number} Base Equipment of the character
   */
  get equipment() {
    return this.baseEquipment + this.intelligenceModifier;
  }

  /**
   *
   * @returns {Number} Base Equipment of the character
   */
  get equipmentList() {
    return this.equipmentList;
  }

  /**
   *
   * @returns {Number} Base Resource Level of the character
   */
  get resource() {
    return this.baseResource;
  }

  /**
   *
   * @returns {Number} Base Armour Class of the character
   */
  get armourClass() {
    return this.baseArmourClass + this.dexterityModifier;
  }

  /**
   *
   * @param {Object} equipment sets the equipment list for a character
   */
  set equipmentList(equipment) {
    this.equipmentList = equipment;
  }
}
