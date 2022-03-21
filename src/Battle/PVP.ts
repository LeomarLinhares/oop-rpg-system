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
    while (this.player1.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
