/**
 * 
 * Helper functions for simulating dice rolls 
 * 
 */

export function rollDice(dice){
    return Math.floor(Math.random() * dice) + 1;
}