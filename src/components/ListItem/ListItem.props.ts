import { IListItem } from "@main-types/list";

export interface ListItemProps extends IListItem {
  deleteHandler: (id: number) => void;
  successHandler: (id: number) => void;
  className?: string;
}
