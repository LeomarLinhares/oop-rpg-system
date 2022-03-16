import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _createdNecromancerInstances = 0;
  private _energyType: EnergyType;
  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addNecromancerInstance();
  }

  private static addNecromancerInstance() {
    Necromancer._createdNecromancerInstances += 1;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer._createdNecromancerInstances;
  }
}

export default Necromancer;
