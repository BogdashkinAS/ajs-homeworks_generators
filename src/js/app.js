import Character from './character.js';

export default class Team extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
    }

    * [Symbol.iterator]() {
        for (const person of this.persons) {
            yield person;
        }
    }
}
