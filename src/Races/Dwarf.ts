import Race from './Race';

class Dwarf extends Race {
  private static _createdDwarfInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 80,
  ) {
    super(name, dexterity);
    Dwarf.addDwarfInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addDwarfInstance() {
    this._createdDwarfInstances += 1;
  }

  static override createdRacesInstances(): number {
    return this._createdDwarfInstances;
  }
}

export default Dwarf;
