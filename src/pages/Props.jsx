import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import TableInfo from "../components/TableInfo";
import Wrong from "../components/Wrong";

const typeProps = [
  {
    name: "Строка",
    description: 'в кавычках: <Profile name="Анна" />',
  },
  {
    name: "Числа, boolean и JavaScript-выражения",
    description:
      "в фигурных скобках: <Profile experience={3} isAvailable={true} />",
  },
  {
    name: "Объект",
    description:
      "<Profile location={{ city: 'Минск', country: 'Беларусь' }} />",
  },
];

const Props = () => {
  return (
    <>
      <h1>Props</h1>
      <Info>
        Props похожи на аргументы обычной JavaScript-функции: родитель передаёт
        значения, а компонент использует их при отображении.
      </Info>

      <h3>Передача props</h3>
      <p>Прописывается как свойство в компоненте</p>
      <CodeStyle>{`<Greeting name="Павел" />`}</CodeStyle>

      <h3>Деструктуризация props</h3>
      <p>
        При получении для удобства сразу деструктуризируют, так как в параметрах
        получается объект со всеми передаваемыми значениями
      </p>
      <CodeStyle>
        {`function Profile({ name, role }) {
            return (
              <article>
                <h2>{name}</h2>
                <p>{role}</p>
              </article>
            )
          }/>`}
      </CodeStyle>
      <h3>Типы значений</h3>
      <p>В пропсах можно передать любые типы данных</p>
      <TableInfo data={typeProps} />
      <h3>Children</h3>
      <Info>
        children — специальный prop с содержимым, вложенным между открывающим и
        закрывающим тегами компонента
      </Info>
      <CodeStyle>
        {`function Card({ children }) {
            return <article className="card">{children}</article>
          }/>`}
      </CodeStyle>
      <br />
      <Wrong>Props только для чтения, изменять нельзя</Wrong>
    </>
  );
};

export default Props;
