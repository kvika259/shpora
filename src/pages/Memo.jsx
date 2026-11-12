import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";

const Memo = () => {
  return (
    <>
      <h1>Memo</h1>
      <h2>React.memo</h2>
      <Info>
        React.memo — это функция высшего порядка (HOC), которая используется для
        оптимизации функциональных компонентов. Она предотвращает ненужные
        повторные рендеры, если пропсы компонента не изменились.
      </Info>
      <p>
        <b>Принимает:</b> React.memo(Component, compareFunction?)
      </p>
      <p>
        <b>Возвращает:</b> новый мемоизированный компонент, который ререндерится
        только при изменении пропсов
      </p>
      <p>
        compareFunction можно кастомизировать. Для этого мы прописываем callback
        вручную, который принимает prevProps и nextProps. Возвращать функция
        должна:
      </p>
      <ul>
        <li>
          true → если пропсы не изменились, компонент НЕ будет ререндериться
        </li>
        <li>false → если пропсы изменились, компонент перерисуется</li>
      </ul>
      Пример:
      <CodeStyle>{`
const MemoizedUserInfo = React.memo(UserInfo, (prevProps, nextProps) => {
  return prevProps.user.name === nextProps.user.name;
});`}</CodeStyle>
      <h2>useMemo</h2>
      <a href="https://react.dev/reference/react/useMemo">Документация</a>
      <br />
      <br />
      <Info>
        useMemo — это хук для оптимизации производительности, который позволяет
        кэшировать результаты вычислений и избегать ненужных пересчётов при
        каждом рендере.
      </Info>
      <p>
        <b>Принимает:</b> {`useMemo(() => computeValue, [dependencies])`}
      </p>
      <p>
        <b>Возвращает:</b> мемоизированное (кэшированное) значение — результат
        работы переданной функции
      </p>
      Использование:
      <ol>
        <li>
          оптимизация вычислений
          <CodeStyle>{`function App({ number }) {
  const squared = useMemo(() => {
    console.log('Выполняем тяжёлый расчёт...');
    return number ** 2;
  }, [number]);

  return <p>Результат: {squared}</p>;
}
}`}</CodeStyle>
        </li>
        <li>
          избегаем проблем с объектами в React.memo (работает со всеми
          ссылочными типами данных)
          <CodeStyle>{`function App() {
  const [count, setCount] = React.useState(0);
  const user = useMemo(() => ({ name: 'Анна' }), []);

  return (
    <div>
      <Child user={user} />
      <button onClick={() => setCount(count + 1)}>Обновить {count}</button>
    </div>
  );
}`}</CodeStyle>
        </li>
      </ol>
      <h2>useCallback</h2>
      <a href="https://react.dev/reference/react/useCallback">Документация</a>
      <br />
      <br />
      <Info>
        useCallback возвращает не результат функции, а её саму между рендерами,
        если зависимости не изменились.
      </Info>
      <p>
        <b>Принимает:</b> {`useCallback(callbackFunction, [dependencies])`}
      </p>
      <p>
        <b>Возвращает:</b> ту же самую функцию между рендерами (если зависимости
        не изменились)
      </p>
      Пример использования:
      <CodeStyle>{`function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Павел" },
    { id: 2, name: "Иван" },
    { id: 3, name: "Мария" }
  ]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => setUsers(users.filter((u) => u.id !== user.id))}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}`}</CodeStyle>
    </>
  );
};

export default Memo;
