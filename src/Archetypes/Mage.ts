import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _createdMageInstances = 0;
  private _energyType: EnergyType;
  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'mana';
    Mage.addMageInstance();
  }

  private static addMageInstance() {
    Mage._createdMageInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Mage._createdMageInstances;
  }
}

export default Mage;
