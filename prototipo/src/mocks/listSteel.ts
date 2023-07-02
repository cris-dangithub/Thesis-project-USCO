export type nominalNumbers = 3 | 4 | 5 | 6 | 7 | 8;

export interface ISteel {
  nominalNumber: nominalNumbers;
  long: number;
}
export interface IOrder extends ISteel {
  id: number;
  cant: number;
}

export const listSteel: IOrder[] = [
  { id: 1, nominalNumber: 5, long: 2, cant: 10 },
  { id: 2, nominalNumber: 5, long: 6.13, cant: 10 },
];
