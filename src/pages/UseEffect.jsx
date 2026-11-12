import Info from "../components/Info";
import TableInfo from "../components/TableInfo";
import Wrong from "../components/Wrong";

const useEffects = [
  {
    name: `componentDidMount`,
    description: 'useEffect(() => { console.log("componentDidMount") }, [])',
  },
  {
    name: "componentDidUpdate",
    description:
      'useEffect(() => { console.log("componentDidUpdate") }, [dependency])',
  },
  {
    name: "componentDidMount и componentDidUpdate",
    description:
      'useEffect(() => { console.log("componentDidMount и componentDidUpdate") })',
  },
  {
    name: "componentWillUnmount",
    description: `useEffect(() => {return () => console.log('componentWillUnmount')}, [])`,
  },
];
const UseEffect = () => {
  return (
    <>
      <h1>UseEffect</h1>
      <h2>Основные этапы жизненного цикла компонента</h2>
      <ol>
        <li>
          Монтирование (Mounting)
          <ul>
            <li>
              <i>constructor</i> - инициализация состояния и привязка методов
            </li>
            <li>
              <i>render</i> - возвращает JSX-разметку
            </li>
            <li>
              <i>componentDidMount</i> - место для запросов к серверу, подписки
              на события или установки таймеров
            </li>
          </ul>
        </li>
        <li>
          Обновление (Updating)
          <ul>
            <li>
              <i>shouldComponentUpdate</i> - позволяет контролировать, следует
              ли перерисовывать компонент
            </li>
            <li>
              <i>render</i> - для обновления отображения
            </li>
            <li>
              <i>componentDidUpdate</i> - можно реагировать на изменение данных,
              выполнять дополнительные запросы или работать с изменённым DOM
            </li>
          </ul>
        </li>
        <li>
          Размонтирование (Unmounting)
          <ul>
            <li>
              <i>componentWillUnmount</i> - происходит очистка
            </li>
          </ul>
        </li>
        <li>
          Обработка ошибок (Error Handling)
          <ul>
            <li>
              <i>static getDerivedStateFromError(error)</i> - позволяет обновить
              состояние, чтобы отобразить запасной UI при возникновении ошибки
            </li>
            <li>
              <i>componentDidCatch(error, info)</i> - позволяет записать
              информацию об ошибке или отправить её на сервер для дальнейшего
              анализа
            </li>
          </ul>
        </li>
      </ol>
      <h2>Жизненный цикл функциональных компонентов</h2>
      <Info>
        useEffect - это хук в React, предназначенный для работы с методами
        жизненного цикла в функциональных компонентах.
      </Info>
      <TableInfo data={useEffects} />
      <Wrong>
        При первом рендере компонента useEffect в качестве componentDidUpdate
        также будет вызван, даже если он имеет зависимость и при этом
        первоначальное значение зависимости не изменилось. Это не является
        ошибкой, а предполагаемое поведение хуков.
      </Wrong>
    </>
  );
};

export default UseEffect;
