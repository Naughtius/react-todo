import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import css from "./CreateForm.module.scss";
// UI
import { Button, Input } from "@components/UI";
// Store
import list from "@store/list";

const CreateForm: FC = () => {
  const [term, setTerm] = useState<string>("");

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  }, []);

  const onSubmitHander = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (term.trim() !== "") {
        list.createListItem(term);
        setTerm("");
      }
    },
    [term]
  );

  return (
    <form onSubmit={onSubmitHander} className={css.form}>
      <Input
        value={term}
        onChange={onChangeInput}
        placeholder="Название"
        className={css.form_input}
      />
      <Button type="submit">Создать</Button>
    </form>
  );
};

export default CreateForm;
