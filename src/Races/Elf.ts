import Race from './Race';

class Elf extends Race {
  private static _createdElfInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 99,
  ) {
    super(name, dexterity);
    Elf.addElfInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addElfInstance() {
    this._createdElfInstances += 1;
  }

  static override createdRacesInstances(): number {
    return this._createdElfInstances;
  }
}

export default Elf;
