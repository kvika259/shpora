import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import TableInfo from "../components/TableInfo";
import Wrong from "../components/Wrong";

const typeSet = [
  {
    name: "Объект",
    description: "с помощью оператора spread (...)",
  },
  {
    name: "Массив",
    description:
      "с помощью оператора spread (...), а также немутирующие методы map, filter, concat, slice, flat",
  },
];
const State = () => {
  return (
    <>
      <h1>State</h1>
      <Info>
        State (состояние) в React — это место, где компонент хранит свои
        динамические данные. Это как записная книжка, которую компонент
        использует для хранения текущего состояния и его изменения.
      </Info>
      <h3>Чем отличается state от props</h3>
      <ul>
        <li>
          <b>Props</b> передаются компоненту «снаружи», от родителя, и
          неизменны.
        </li>
        <li>
          <b>State</b> управляется «внутри» компонента и изменяется.
        </li>
      </ul>
      <h2>Создание и использование state</h2>
      <div>
        <p>
          В функциональных компонентах для работы с state используется хук{" "}
          <b>useState</b>.
        </p>
        Принимает <i>initialState</i> — начальное значение состояния (может быть
        любым типом данных). Возвращает массив из двух элементов:
        <ul>
          <li>
            <i>state</i> — текущее значение состояния
          </li>
          <li>
            <i>setState</i> — функцию для его обновления
          </li>
        </ul>
      </div>
      <CodeStyle>const [state, setState] = useState(initialState)</CodeStyle>
      <h2>Изменение state</h2>
      <Wrong>State не должен изменяться напрямую. Используется сеттер.</Wrong>
      <br />
      <Info>
        <b>setState</b> — асинхронный
      </Info>
      <br />
      Если нужно обновить состояние на основе его текущего значения, используй
      функцию: <CodeStyle>{"setCount((prevCount) => prevCount + 1)"}</CodeStyle>
      <h3>Пример асинхронного поведения</h3>
      <CodeStyle>{`import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;`}</CodeStyle>
      При нажатии на кнопку <i>count</i> увеличится только на 1.
      <h2>Работа с объектами и массивами в state</h2>
      <p>
        Так как это ссылочные типы данных, то необходимо использовать методы,
        которые создают новый объект/массив
      </p>
      <TableInfo data={typeSet} />
    </>
  );
};

export default State;
