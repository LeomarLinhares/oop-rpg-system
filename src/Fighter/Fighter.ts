import Energy from "../Energy";

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  receivedDamage?(attackPoints: number): void;
}

export default Fighter;