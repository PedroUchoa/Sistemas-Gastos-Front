import { ITransaction } from "./ITransaction.interface";

export interface IPersons{
  id: string,
  name:string,
  age: number,
  transactions: ITransaction[]
}
