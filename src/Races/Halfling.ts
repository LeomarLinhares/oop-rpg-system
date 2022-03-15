import Race from './Race';

class Halfling extends Race {
  private static _createdHalflingInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints = 60,
  ) {
    super(name, dexterity);
    Halfling.addHalflingInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addHalflingInstance() {
    this._createdHalflingInstances += 1;
  }

  static override createdRacesInstances(): number {
    return this._createdHalflingInstances;
  }
}

export default Halfling;
