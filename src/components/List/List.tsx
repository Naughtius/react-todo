import { FC, useCallback } from "react";
import css from "./List.module.scss";
import { observer } from "mobx-react-lite";
// Components
import ListItem from "@components/ListItem";
// Store
import list from "@store/list";

const List: FC = () => {
  const deleteHandler = useCallback((id: number) => {
    list.deleteListItem(id);
  }, []);

  const successHandler = useCallback((id: number) => {
    list.successListItem(id);
  }, []);

  const data = list.filter();

  return (
    <div className={css.list}>
      {data.length === 0 ? (
        <div className={css.list_empty}>Список пустой</div>
      ) : (
        data.map((item) => (
          <ListItem
            key={item.id}
            {...item}
            deleteHandler={deleteHandler}
            successHandler={successHandler}
            className={css.list_item}
          />
        ))
      )}
    </div>
  );
};

export default observer(List);
