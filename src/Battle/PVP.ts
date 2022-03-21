import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(
    public player1: Fighter,
    public player2: Fighter,
  ) {
    super(player1);
  }

  override fight(): number {
    this.player2.receiveDamage(this.player1.strength);
    this.player1.receiveDamage(this.player2.strength);
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
