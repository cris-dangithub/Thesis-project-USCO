import { Order } from "./src/classes/orders";
import { listSteel } from "./src/mocks/listSteel";

class App {
  public listOrders: Order[] = [];
  constructor() {
    console.log(this);
    this.readData();
    console.log(this.listOrders);
    console.log(Order.getGroups);
    this.groupData(1, 2);
    console.log(Order.getGroups);
  }

  public readData() {
    // 1. get data from xlsx (listSteel mock)
    // ...
    // 2. generate objects
    listSteel.forEach((order) => {
      this.listOrders.push(new Order(order));
    });
  }

  public groupData(limInf: number, limSup: number) {
    try {
      Order.addGroups(limInf, limSup);
    } catch (error) {
      console.log(error);
    }
  }
}

const app = new App();
