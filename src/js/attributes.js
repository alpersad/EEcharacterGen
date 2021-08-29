/**
 *
 * Handles the attributes of an esoteric enterprises character
 *
 */

import { rollDice } from "./dice";

class Attribute {
  name;
  value;
  modifier;

  constructor(name) {
    this.name = name;
    this.value = this.calcAttribute();
    this.modifier = this.calcModifier();
  }

  /**
   *
   * @returns {number} Sum of three six-sided die rolls
   */
  calcAttribute() {
    let roll_one = rollDice(6);
    let roll_two = rollDice(6);
    let roll_three = rollDice(6);
    console.log(`${this.name} : ${roll_one} + ${roll_two} + ${roll_three}`);
    return roll_one + roll_two + roll_three;
  }

  /**
   *
   * @returns {number} Modifier for calculated attribute
   */
  calcModifier() {
    if (this.value <= 3) {
      return -3;
    } else if (this.value <= 5) {
      return -2;
    } else if (this.value <= 8) {
      return -1;
    } else if (this.value <= 12) {
      return -0;
    } else if (this.value <= 15) {
      return 1;
    } else if (this.value <= 17) {
      return 2;
    } else {
      return 3;
    }
  }

  calcDoppelganger() {
    this.value = 21 - this.value;
    this.calcModifier();
  }

  toString() {
    return `${this.name} : ${this.value} 
      Modifier : ${this.modifier}`;
  }
}

class Attributes {
  strength = new Attribute("strength");
  dexterity = new Attribute("dexterity");
  constitution = new Attribute("constitution");
  intelligence = new Attribute("intelligence");
  wisdom = new Attribute("wisdom");
  charisma = new Attribute("charisma");

  toString() {
    return `Attributes : 
    ${this.strength.toString()}
    ${this.dexterity.toString()}
    ${this.constitution.toString()}
    ${this.intelligence.toString()}
    ${this.wisdom.toString()}
    ${this.charisma.toString()}`;
  }
}

export { Attributes };
