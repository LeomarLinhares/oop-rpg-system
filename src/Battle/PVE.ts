import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    public player: Fighter,
    public environment: SimpleFighter[],
  ) {
    super(player);
  }

  override fight(): number {
    this.environment.forEach((monster) => {
      this.player.attack(monster);
      monster.attack(this.player);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;
