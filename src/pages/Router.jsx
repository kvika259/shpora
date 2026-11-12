import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import TableInfo from "../components/TableInfo";
import Wrong from "../components/Wrong";

const elements = [
  {
    name: "BrowserRouter",
    description:
      "компонент, который оборачивает твоё приложение и предоставляет контекст для маршрутизации. Он используется для настройки основного маршрутизатора в приложении",
  },
  {
    name: "Routes",
    description:
      "компонент, который содержит определения маршрутов и соответствующих им компонентов. Ты определяешь маршруты внутри компонента Routes, используя элемент Route",
  },
  {
    name: "Route",
    description:
      "используется для определения отдельных маршрутов и связанных с ними компонентов. Ты определяешь маршруты с помощью элемента Route, указывая путь URL и связанный с ним компонент, который будет отображаться при совпадении маршрута",
  },
  {
    name: "Link и NavLink",
    description:
      "используются для создания ссылок для навигации между маршрутами. Они позволяют пользователю переходить к соответствующим маршрутам без перезагрузки страницы. NavLink также предоставляет возможности для стилизации активных ссылок и текущего маршрута",
  },
  {
    name: "Outlet",
    description:
      "контейнер, в котором будут отображаться компоненты, связанные с соответствующими маршрутами",
  },
  {
    name: "useNavigate",
    description:
      "хук для программной навигации между маршрутами. Он позволяет тебе переходить к другим маршрутам из компонентов или обработчиков событий",
  },
  {
    name: "useParams",
    description:
      "хук для получения параметров маршрута, переданных через URL. Он позволяет извлекать и использовать динамические данные из пути маршрута",
  },
  {
    name: "useLocation",
    description:
      "хук для получения информации о текущем URL. Он предоставляет доступ к объекту location, который содержит информацию о текущем пути, параметрах и других деталях URL",
  },
];

const Router = () => {
  return (
    <>
      <h1>Router</h1>
      <Info>
        React Router — стандартная библиотека маршрутизации для
        React-приложений. Она связывает URL браузера с компонентами: при смене
        адреса перерисовывается только нужная часть страницы, без полной
        перезагрузки.
      </Info>
      <h2>Установка</h2>
      <CodeStyle>npm install react-router</CodeStyle>
      <h2>Основные компоненты и хуки</h2>
      <TableInfo data={elements} />
      <h3>Route</h3>
      Каждый Route имеет свой путь (path) и элемент (element), который будет
      отображаться, когда маршрут совпадает:
      <CodeStyle>{`import { Routes, Route } from 'react-router';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>`}</CodeStyle>
      <Wrong>
        Путём "*" обозначают, если совпадений по маршруту не будет найдено
        (например, отображение страницы NotFound)
        <p>
          Динамический маршрут обозначается через '/:' (например,
          path="/users/:id")
        </p>
      </Wrong>
      <h3>Link и NavLink</h3>
      <CodeStyle>{`
  <Link to="/">Главная</Link>
  <NavLink to="/faq" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
      `}</CodeStyle>
      <Info>
        В актуальной версии react-router для NavLink можно использовать свойство
        className или style, которые принимают функцию. Эта функция получает
        объект с информацией о ссылке, где ключевое значение — isActive. Если
        ссылка активна (то есть URL совпадает с тем, что указан в to), то
        isActive будет true, и, соответственно, можно задать нужный класс или
        стили.
      </Info>
      <h3>useNavigate</h3>
      Использование:
      <CodeStyle>{`import { useNavigate } from 'react-router';

// ...

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Домашняя страница</h1>
      <button onClick={handleClick}>Перейти к странице О нас</button>
    </div>
  );
};`}</CodeStyle>
      <h3>Outlet</h3>
      <Info>
        Outlet определяет место, где будут отображаться вложенные маршруты.
      </Info>
      Если есть маршрут «/about», определённый с использованием компонента
      AboutPage, то Outlet должен быть включён внутри AboutPage для отображения
      компонентов вложенных маршрутов по пути «/about». В примере ниже Outlet
      является компонента Contact:
      <CodeStyle>
        {`import { Routes, Route } from 'react-router';


const App = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />}>
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
  return (  );
};`}
      </CodeStyle>
      <CodeStyle>
        {`import { Outlet } from 'react-router';

// ...

const About = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <nav>
        {/* Навигационные ссылки */}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};`}
      </CodeStyle>
      <h2>PrivateRoute: защита маршрутов</h2>
      <h3>Создание компонента PrivateRoute</h3>
      <CodeStyle>{`import { Route, Navigate } from 'react-router';

const PrivateRoute = ({ ...props }) => {
  const isAuth = /* Логика проверки аутентификации пользователя */;
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};`}</CodeStyle>
      Если пользователь аутентифицирован, компонент PrivateRoute отображает
      вложенные маршруты через Outlet, в противном случае происходит редирект на
      страницу входа с помощью компонента Navigate.
      <h3>Использование компонента PrivateRoute</h3>
      <CodeStyle>{`import { BrowserRouter as Router, Routes, Route } from "react-router";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </Router>
  );
};`}</CodeStyle>
    </>
  );
};

export default Router;
