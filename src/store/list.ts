import { makeAutoObservable } from "mobx";
// Types
import { IListItem } from "@main-types/list";

class List {
  data: IListItem[] = [];
  filterId: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  deleteListItem(id: number) {
    const filteredList = this.data.filter((item) => item.id !== id);

    this.data = filteredList;
  }

  createListItem(text: string) {
    const item = { id: this.data.length + 1, text, status: 0 };

    this.data.push(item);
  }

  successListItem(id: number) {
    const arr = this.data.map((item) => {
      if (item.id === id) {
        item.status = 1;
      }

      return item;
    });

    this.data = arr;
  }

  onChangeFilter(id: number) {
    this.filterId = id;
  }

  filter() {
    // this.filterId (1 - Все, 2 - Выполненные, 3 - Не выполненные)
    switch (this.filterId) {
      case 1:
        return this.data;
      case 2:
        return this.data.filter((e) => e.status === 1);
      case 3:
        return this.data.filter((e) => e.status === 0);
      default:
        return this.data;
    }
  }
}

export default new List();
