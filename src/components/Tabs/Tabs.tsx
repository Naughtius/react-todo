import { FC, useCallback } from "react";
import css from "./Tabs.module.scss";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import { ITabsFilter } from "./Tabs.props";
// Component
import { Button } from "@components/UI";
// Store
import list from "@store/list";

const tabs: ITabsFilter[] = [
  { id: 1, text: "Все" },
  { id: 2, text: "Выполненные" },
  { id: 3, text: "Не выполненные" },
];

const Tabs: FC = () => {
  const changeFilterHandler = useCallback((id: number) => {
    list.onChangeFilter(id);
  }, []);

  return (
    <div className={cn(css.tabs)}>
      {tabs.map((item) => (
        <Button
          outline={list.filterId !== item.id}
          key={item.id}
          className={css.tabs_item}
          onClick={() => changeFilterHandler(item.id)}
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
};

export default observer(Tabs);
