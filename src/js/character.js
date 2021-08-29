/**
 *
 *  Base class for creating a character
 *  All classes should inherit from this class
 *
 */

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

  /**
   *
   * @param {String} name Name of character
   */
  constructor(name) {
    this.name = name;
  }

  /**
   *
   * @returns {String} Output of base character information
   */
  toString() {
    return `${this.attributes.toString()}
${this.health.toString()}
${this.saves.toString()}
${this.skills.toString()}
Equipment : ${this.equipment}
Resource Level : ${this.resource}
Armour Class : ${this.armourClass}`;
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
   * @returns {Number} Base Flesh of the character
   */
  get flesh() {
    return this.health.flesh;
  }

  /**
   *
   * @returns {Number} Base Grit of the character
   */
  get grit() {
    return this.health.grit;
  }

  /**
   *
   * @returns {Number} Base Stunning Save of the character
   */
  get stun() {
    return this.saves.stun;
  }

  /**
   *
   * @returns {Number} Base Poison Save of the character
   */
  get poison() {
    return this.saves.poison;
  }

  /**
   *
   * @returns {Number} Base Hazard Save of the character
   */
  get hazard() {
    return this.saves.hazard;
  }

  /**
   *
   * @returns {Number} Base Machine Save of the character
   */
  get machine() {
    return this.saves.machine;
  }

  /**
   *
   * @returns {Number} Base Magic Save of the character
   */
  get magic() {
    return this.saves.magic;
  }

  /**
   *
   * @returns {Number} Base Equipment of the character
   */
  get equipment() {
    return this.baseEquipment;
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
    return this.baseArmourClass;
  }
}
