import { EnergyType } from '../Energy';

abstract class Archetype {
  static _createdArchetypeInstances = 0;
  private _special: number;
  private _cost: number;
  constructor(
    private _name: string,
  ) {
    this._special = 0;
    this._cost = 0;
    Archetype._createdArchetypeInstances += 1;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  abstract energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Archetype;
