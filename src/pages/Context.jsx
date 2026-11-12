import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import Wrong from "../components/Wrong";

const Context = () => {
  return (
    <>
      <h1>Context</h1>
      <a href="https://react.dev/learn/scaling-up-with-reducer-and-context">
        Документация
      </a>
      <br />
      <br />
      <Info>
        Context — механизм React для передачи данных через всё дерево
        компонентов без явного прокидывания пропсов на каждом уровне.
        Компонент-провайдер раздаёт значение, а любой вложенный компонент может
        подписаться на него через хук useContext или Consumer.
      </Info>
      <p>
        Context решает проблему props drilling (это паттерн, который возникает,
        когда компоненту нужно передать данные через несколько уровней других
        компонентов).
      </p>
      <h2>Использование Context</h2>
      <h3>Шаг 1: создание контекста</h3>
      <CodeStyle>{`// MyContext.js
import React from 'react';

const MyContext = React.createContext();

export default MyContext;`}</CodeStyle>
      <h3>Шаг 2: предоставление значения контекста</h3>
      <CodeStyle>{`// App.js
import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;`}</CodeStyle>
      <h3>Шаг 3: использование контекста</h3>
      Можно использовать двумя способами:
      <ul>
        <li>
          хук useContext{" "}
          <CodeStyle>{`// ComponentA.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`}</CodeStyle>
        </li>
        <li>
          через Consumer{" "}
          <CodeStyle>{`// ComponentA.js
import React from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <MyContext.Consumer>
        {(value) => (
          <p>Received value from Context: {value}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`}</CodeStyle>
        </li>
      </ul>
      <Wrong>
        Злоупотребление контекстом может привести к ряду проблем.
        <ol>
          <li>
            <b>Проблемы с производительностью:</b> контекст вызывает повторный
            рендеринг всех дочерних компонентов, когда его значение меняется.
            Это может привести к ненужным рендерингам и снижению
            производительности.
          </li>
          <li>
            <b>Сложность отладки и тестирования:</b> контекст может скрывать
            потоки данных и связи между компонентами, что затрудняет понимание и
            отладку приложения. Тестирование компонентов, зависящих от
            контекста, требует дополнительных настроек, чтобы имитировать
            значения контекста.
          </li>
          <li>
            <b>Нарушение инкапсуляции:</b> контекст позволяет компонентам
            получать данные, которые они иначе не должны были бы видеть. Это
            нарушает принципы инкапсуляции и делает компоненты менее
            независимыми и переиспользуемыми.
          </li>
          <li>
            <b>Затруднения с рефакторингом:</b> использование контекста в
            большом количестве компонентов может усложнить рефакторинг и
            изменение структуры приложения, так как изменение контекста или его
            значений потребует изменения многих компонентов.
          </li>
        </ol>
      </Wrong>
    </>
  );
};

export default Context;
