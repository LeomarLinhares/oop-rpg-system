import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _createdRangerInstances = 0;
  private _energyType: EnergyType;
  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addRangerInstance();
  }

  private static addRangerInstance() {
    Ranger._createdRangerInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Ranger._createdRangerInstances;
  }
}

export default Ranger;
