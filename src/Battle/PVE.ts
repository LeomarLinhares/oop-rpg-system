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
      monster.receiveDamage(this.player.strength);
      this.player.receiveDamage(monster.strength);
    });
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;
