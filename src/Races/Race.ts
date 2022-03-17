import IRace from './interfaces/IRace';

abstract class Race implements IRace {
  static _createdRacesInstances = 0;
  
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    Race._createdRacesInstances += 1;
  }
  
  get name(): string {
    return this._name;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
