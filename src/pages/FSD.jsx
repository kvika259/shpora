import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";

const FSD = () => {
  return (
    <>
      <h1>Архитектура проекта</h1>
      <div>
        Существует два подхода:
        <ul>
          <li>
            Modules (разделение по страницам и переиспользуемым компонентам)
          </li>
          <li>
            FSD (Feature-Sliced Design) (разделение на уровни: app, pages,
            features, entities, shared)
          </li>
        </ul>
      </div>
      <h2>Modules</h2>
      <CodeStyle>
        {`
        /src 
          ├── /pages # Страницы приложения 
          │ ├── Home.jsx 
          │ ├── Profile.jsx
          ├── /components # Переиспользуемые UI-компоненты 
          │ ├── Button.jsx 
          │ ├── Input.jsx 
          ├── /hooks # Пользовательские хуки 
          │ ├── useAuth.js 
          │ ├── useFetch.js 
          ├── /utils # Утилиты (общие вспомогательные функции) 
          │ ├──formatDate.js 
          │ ├── debounce.js 
          ├── /helpers # Хелперы (функции, связанные с конкретными модулями) 
          │ ├── authHelper.js 
          │ ├── validationHelper.js 
          ├── /redux # Redux-хранилище и слайсы 
          │ ├── store.js
          │ ├── authSlice.js 
          │ ├── userSlice.js 
          ├── /api # Файлы для работы с сервером (запросы к API) 
          │ ├── apiConfig.js 
          │ ├── authApi.js 
          │ ├── userApi.js 
          ├── App.jsx # Главный компонент 
          ├── index.js # Точка входа
          `}
      </CodeStyle>
      <h2>FSD</h2>
      <CodeStyle>
        {`
        /src
          ├── /app        # Конфигурация приложения (роутинг, провайдеры)
          │   ├── App.jsx
          │   ├── routes.jsx
          ├── /pages      # Страницы (собирают features и entities)
          │   ├── HomePage.jsx
          │   ├── ProfilePage.jsx
          ├── /features   # Фичи (авторизация, поиск, корзина)
          │   ├── /auth
          │   │   ├── LoginForm.jsx
          │   │   ├── model.js  # Логика авторизации
          ├── /entities   # Бизнес-логика (пользователь, товары)
          │   ├── /user
          │   │   ├── UserCard.jsx
          │   │   ├── userModel.js
          ├── /shared     # Общие UI-компоненты (кнопки, инпуты, утилиты)
          │   ├── Button.jsx
          │   ├── Input.jsx
          `}
      </CodeStyle>
      <Info>
        <b>Как выбрать</b>
        <p>
          Если ты делаешь небольшой проект (лендинг, блог, ToDo List) — Modules.
        </p>
        <p>Если проект большой (маркетплейс, CRM, сложная админка) — FSD.</p>
      </Info>
    </>
  );
};

export default FSD;
