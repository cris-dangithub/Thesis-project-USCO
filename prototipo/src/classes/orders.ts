import { IOrder } from "../mocks/listSteel";
import { roundValue } from "../utils/roundValue";
import { Steel } from "./steel";
type GroupsIds = Array<number | number[]>;

export class Order {
  private id: number;
  private cant: number;
  private totalLength: number;
  private totalWeight: number;
  private steel: Steel;

  private static groups: GroupsIds = [];

  constructor(order: IOrder) {
    const { id, nominalNumber, long, cant } = order;
    this.steel = new Steel({ nominalNumber, long });
    this.id = id;
    this.cant = cant;
    this.totalLength = roundValue(long * cant);
    this.totalWeight = roundValue(this.steel.getWeight * this.cant);
    Order.groups.push(this.id);
  }

  public static get getGroups(): GroupsIds {
    return Order.groups;
  }

  // limits are not index from array
  public static addGroups(limInf: number, limSup: number) {
    if (!(limInf < limSup)) throw new Error("Lower limit cannot be higher");
    const infIndex = Order.findIndexOrderGroup(limInf);
    const supIndex = Order.findIndexOrderGroup(limSup);
    console.log({ infIndex, supIndex });
    if ([infIndex, supIndex].includes(-1))
      throw new Error("Some index was not found");
    const extractedGroups = Order.groups.slice(infIndex, supIndex + 1);
    console.log({ extractedGroups });
    const amountElements = extractedGroups.length;
    Order.groups.splice(infIndex, amountElements, extractedGroups);
  }
  private static findIndexOrderGroup(lim: number): number {
    return Order.groups.findIndex((el) => el === lim);
  }
}
