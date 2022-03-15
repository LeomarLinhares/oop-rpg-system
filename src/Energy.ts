type EnergyType = 'mana' | 'stamina';

export { EnergyType };

interface Energy {
  amount: number;
  type_: EnergyType;
}

export default Energy;
