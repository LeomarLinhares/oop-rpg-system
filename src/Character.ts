import Race, { Elf } from './Races';
import Fighter from './Fighter/index';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

abstract class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(
    private name: string,
  ) {
    this.race = new Elf(name, getRandomInt(1, 10));
    this.archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this.race.dexterity;
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10)
    };
  }

  receiveDamage(attackPoints: number): void {
    
  }

  attack(enemy: Fighter): void {
    
  }

  levelUp(): void {
    
  }

  special(enemy: Fighter): void {
    
  }
}
