import { FC } from "react";
import css from "./ListItem.module.scss";
import { ListItemProps } from "./ListItem.props";
import cn from "classnames";
// Component
import { Button } from "@components/UI";

const ListItem: FC<ListItemProps> = ({
  id,
  text,
  status,
  deleteHandler,
  successHandler,
  className,
}) => (
  <div className={cn(css.item, className)}>
    <div className={css.item_status}>
      Статус:
      <br />
      {status === 0 ? "Не выполнена" : "Выполнена"}
    </div>
    <div className={css.item_text}>{text}</div>
    <div className={css.item_btns}>
      <Button
        className={css.item_delete}
        onClick={() => deleteHandler(id)}
        variant="red"
      >
        Удалить
      </Button>
      {status !== 1 && (
        <Button className={css.item_success} onClick={() => successHandler(id)}>
          Выполнить
        </Button>
      )}
    </div>
  </div>
);

export default ListItem;
