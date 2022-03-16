import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _createdWarriorInstances = 0;
  private _energyType: EnergyType;
  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addWarriorInstance();
  }

  private static addWarriorInstance() {
    Warrior._createdWarriorInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Warrior._createdWarriorInstances;
  }
}

export default Warrior;
