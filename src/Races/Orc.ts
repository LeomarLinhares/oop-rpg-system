import Race from './Race';

class Orc extends Race {
  private static _createdOrcInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 74,
  ) {
    super(name, dexterity);
    Orc.addOrcInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addOrcInstance() {
    this._createdOrcInstances += 1;
  }

  static override createdRacesInstances(): number {
    return this._createdOrcInstances;
  }
}

export default Orc;
