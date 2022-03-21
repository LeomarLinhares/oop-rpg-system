import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): void {
    const damage = this._lifePoints - attackPoints;
    this._lifePoints = damage;
    if (damage <= 0) this._lifePoints = -1;
  }
}

export default Monster;
