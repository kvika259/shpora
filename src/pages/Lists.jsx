import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import TableInfo from "../components/TableInfo";

const typeFragment = [
  {
    name: "<>...</>",
    description: "импортировать не нужно, ничего не принимает",
  },
  {
    name: "<React.Fragment>...</React.Fragment>",
    description: "можно использовать атрибуты, например id или key",
  },
];

const Lists = () => {
  return (
    <>
      <h1>Списки, key, fragment</h1>
      <h2>key</h2>
      <a href="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key">
        Документация
      </a>
      <br />
      <br />
      <Info>
        key — это уникальный идентификатор, который React использует для
        определения, какие элементы списка изменились, добавились или удалились.
        Без key React перерисовывает элементы списка неэффективно, что может
        привести к неожиданному поведению и падению производительности.
      </Info>
      <h3>Основные правила использования key</h3>
      <ul>
        <li>key должен быть уникальным для каждого элемента (ID)</li>
        <li>Не используй индекс массива</li>
        <li>
          Сохраняй стабильность ключей (пример нестабильного - использование
          uuid, так как каждый раз новое значение)
        </li>
        <li>
          Не добавляй key без необходимости: не нужно указывать key для
          элементов, которые не являются частью списка.
        </li>
      </ul>
      <h2>Fragment</h2>
      <a href="https://react.dev/reference/react/Fragment">Документация</a>
      <br />
      <br />
      <Info>
        Fragment в React — это вспомогательный компонент, который позволяет
        оборачивать несколько дочерних элементов без добавления лишнего элемента
        в DOM.
      </Info>
      <br />
      Есть два вида записи:
      <TableInfo data={typeFragment} />
      <h2>Refs</h2>
      <a href="https://react.dev/reference/react/useRef">Документация</a>
      <br />
      <br />
      <Info>
        Refs (сокр. от "references") в React позволяют получить доступ к
        DOM-элементам или компонентам напрямую. Это своего рода «обходной путь»,
        который даёт тебе возможность взаимодействовать с элементами вне
        обычного React-потока данных.
      </Info>
      Пример управления фокусом:
      <CodeStyle>{`const inputRef = useRef();

function focusInput() {
  inputRef.current.focus();
}

return (
  <div>
    <input ref={inputRef} type="text" />
    <button onClick={focusInput}>Фокус</button>
  </div>
);`}</CodeStyle>
      Может использоваться для хранения данных между рендерами без их повторного
      вызова.
      <CodeStyle>{`import { useRef, useState, useEffect } from "react";

function PreviousStateExample() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);

  useEffect(() => {
    prevCount.current = count; // Запоминаем предыдущее значение после рендера
  }, [count]);

  return (
    <div>
      <p>Текущее значение: {count}</p>
      <p>Предыдущее значение: {prevCount.current}</p>
      <button onClick={() => setCount(count => count + 1)}>Увеличить</button>
    </div>
  );
}`}</CodeStyle>
      <h3>Когда использовать Refs</h3>
      <ol>
        <li>
          Фокусировка или управление DOM: например, фокус на инпуте после
          загрузки страницы.
        </li>
        <li>
          Реализация пользовательских анимаций: доступ к элементу для прямого
          управления его стилями.
        </li>
        <li>
          Интеграция с внешними библиотеками: например, инициализация стороннего
          плагина для DOM.
        </li>
      </ol>
      <h2>React.StrictMode</h2>
      <Info>
        React.StrictMode — это инструмент, встроенный в React, который помогает
        разработчикам выявлять потенциальные проблемы в приложениях. Он
        добавляет дополнительные проверки и предупреждения как для компонентов,
        так и для методов жизненного цикла, что позволяет более надежно
        разрабатывать и поддерживать кодовую базу.
      </Info>
      <h3>Какие проблемы выявляет React.StrictMode</h3>
      <a href="https://react.dev/reference/react/StrictMode">Документация</a>
      <br />
      <ol>
        <li>
          Небезопасные методы жизненного цикла (componentWillMount,
          componentWillReceiveProps, componentWillUpdate). Эти методы считаются
          устаревшими и небезопасными, так как могут привести к ошибкам при
          асинхронных обновлениях.
        </li>
        <li>
          Побочные эффекты: в React.StrictMode компоненты могут монтироваться и
          размонтироваться дважды при разработке, что помогает выявить побочные
          эффекты и ошибки.
        </li>
        <li>
          Проверка на устаревшие строки контекста: React.StrictMode
          предупреждает, если используется устаревший контекст API.
        </li>
        <li>
          Проверка на неправильное использование findDOMNode: метод findDOMNode
          устарел, и его использование может привести к проблемам.
        </li>
      </ol>
    </>
  );
};

export default Lists;
