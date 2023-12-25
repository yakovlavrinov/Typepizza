import React, { FC } from "react";

const AddPizzaForm: FC = () => {
  return (
    <form>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value=""
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value=""
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value=""
      />
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
