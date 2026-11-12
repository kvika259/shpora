import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import TableInfo from "../components/TableInfo";
import Wrong from "../components/Wrong";
const events = [
  {
    name: "onClick",
    description: "возникает при клике на элементе",
  },
  {
    name: "onChange",
    description:
      "возникает при изменении значения элемента формы, такого как текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio)",
  },
  {
    name: "onSubmit",
    description:
      "возникает при отправке формы. Оно позволяет выполнить действия, связанные с отправкой данных формы на сервер",
  },
  {
    name: "onMouseOver",
    description:
      "возникает, когда курсор наводится на элемент. Оно может использоваться для отображения дополнительной информации или изменения состояния компонента при наведении.",
  },
  {
    name: "onKeyDown",
    description: "возникает при нажатии клавиши на клавиатуре",
  },
];

const dop = [
  {
    name: "event.preventDefault()",
    description:
      "Этот метод используется для отмены действия по умолчанию, которое должно было произойти в ответ на событие. Например, если мы кликаем по ссылке, браузер по умолчанию перейдет по указанному в ссылке адресу. Если мы не хотим этого, можно использовать preventDefault().",
  },
  {
    name: "event.stopPropagation()",
    description:
      "Метод stopPropagation() предотвращает дальнейшее распространение события по дереву DOM, т.е. оно не будет передаваться вверх или вниз по цепочке обработчиков событий. Этот метод полезен, когда нужно предотвратить выполнение обработчиков на родительских элементах, но оставить обработку на текущем уровне.",
  },
  {
    name: "event.stopImmediatePropagation()",
    description:
      "Этот метод работает похожим образом на stopPropagation(), но с дополнительной особенностью. Он не только предотвращает дальнейшее распространение события, но и останавливает выполнение других обработчиков события на текущем элементе. Это важно, если на одном элементе установлено несколько обработчиков для одного события, и ты хочешь остановить выполнение всех остальных обработчиков.",
  },
];
const Events = () => {
  return (
    <>
      <h1>Events</h1>
      <Info>
        В React события (events) являются важной частью взаимодействия с
        пользователем. Они позволяют обрабатывать действия пользователя, такие
        как клики, наведение, отправка формы и другие.
      </Info>
      <h3>Часто используемые события</h3>
      <TableInfo data={events} />
      <p>
        Существует множество других событий, таких как onFocus, onBlur, onScroll
        и т. д., которые могут быть использованы в зависимости от конкретных
        потребностей твоего приложения.
      </p>
      <a href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event">
        Документация по событиям
      </a>
      <h2>target VS currentTarget</h2>
      <Info>
        <p>
          <b>event.target.value</b>
          {` — значение, которое было изменено в результате действия пользователя. 
      Например, если есть текстовое поле <input> и пользователь вводит в него текст, 
      то event.target.value будет содержать значение этого текста.`}
        </p>
        <p>
          <b>event.currentTarget.value</b>
          {` — значение, которое ассоциировано с элементом, к которому привязан обработчик событий. 
В контексте React currentTarget обычно ссылается на элемент, к которому был привязан обработчик событий, 
и значение value будет доступно только если этот элемент имеет свойство value, например, <input>, <textarea> или <select>.`}
        </p>
      </Info>
      <CodeStyle>{`const App = () => {
  const [targetValue, setTargetValue] = useState('')
  const [currentTargetValue, setCurrentTargetValue] = useState('')

  const handleClick = event => {
    // event.target.value — значение элемента, который был непосредственно изменен
    setTargetValue(event.target.value)

    // event.currentTarget.value — значение элемента, к которому привязан обработчик событий
    setCurrentTargetValue(event.currentTarget.value)
  }

  return (
    <div>
      <h1>
        Демонстрация сравнения event.target.value и event.currentTarget.value
      </h1>
      <button value='Parent Button' onClick={handleClick}>
        Parent Button
        <input type='button' value='Child Button' onClick={handleClick} />
      </button>

      <p>event.target.value: {targetValue}</p>
      <p>event.currentTarget.value: {currentTargetValue}</p>
    </div>
  )
}`}</CodeStyle>
      В этом примере:
      <ol>
        <li>
          Когда кликнешь на кнопку «Parent Button», event.target и
          event.currentTarget будут указывать на один и тот же элемент (кнопку),
          поэтому оба значения будут «Parent Button».
        </li>
        <li>
          Когда кликнешь на «Child Button», event.target укажет на «Child
          Button», а event.currentTarget укажет на «Parent Button», так как
          обработчик события привязан к элементу {`<button>`} родительского
          уровня.
        </li>
      </ol>
      <h2>Доп. методы</h2>
      <TableInfo data={dop} />
      <h3>Отличия между stopPropagation() и stopImmediatePropagation()</h3>
      <ul>
        <li>
          <b>stopPropagation()</b> предотвращает распространение события по
          дереву DOM, но не останавливает другие обработчики, которые могут быть
          назначены на текущий элемент.
        </li>
        <li>
          <b>stopImmediatePropagation()</b> не только предотвращает
          распространение события, но и останавливает выполнение других
          обработчиков события на том же элементе.
        </li>
      </ul>
      <Wrong>
        В JSX нельзя повесить два атрибута onClick на один элемент — второй
        просто перезапишет первый.
      </Wrong>
    </>
  );
};

export default Events;
