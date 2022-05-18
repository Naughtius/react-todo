import { FC } from "react";
import css from "./App.module.scss";
// Components
import CreateForm from "@components/CreateForm";
import List from "@components/List";
import Tabs from "@components/Tabs";

const App: FC = () => {
  return (
    <div className={css.app}>
      <div className={css.wrapper}>
        <div className={css.title}>Todo List</div>
        <CreateForm />
        <Tabs />
        <List />
      </div>
    </div>
  );
};

export default App;
