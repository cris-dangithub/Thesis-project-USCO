import { steelTableWeight } from "../mocks/NSR10_SteelTable";
import { ISteel, nominalNumbers } from "../mocks/listSteel";
import { roundValue } from "../utils/roundValue";

export class Steel {
  private nominalNumber: nominalNumbers;
  private length: number;
  private weight!: number; //kg
  constructor(steelProps: ISteel) {
    this.nominalNumber = steelProps.nominalNumber;
    this.length = steelProps.long;
    this.weight = roundValue(
      steelTableWeight[this.nominalNumber] * this.length
    );
  }

  public get getWeight(): number {
    return this.weight;
  }
}
