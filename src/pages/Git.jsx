import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import TableInfo from "../components/TableInfo";
import Wrong from "../components/Wrong";

const newProject = [
  {
    name: "index.html",
    description: "HTML-точка входа приложения",
  },
  {
    name: "src/main.jsx",
    description: "подключает React к странице и рендерит корневой компонент",
  },
  {
    name: "src/App.jsx",
    description: "главный компонент стартового приложения",
  },
  {
    name: "src/index.css",
    description: "базовые стили",
  },
  {
    name: "public",
    description: "статические файлы, которые копируются без обработки",
  },
  {
    name: "package.json",
    description: "зависимости и команды проекта",
  },
  {
    name: "vite.config.js",
    description: "настройки Vite",
  },
];

const concepts = [
  {
    name: "Репозиторий",
    description: "папка проекта, историю которой отслеживает Git",
  },
  {
    name: "Коммит",
    description: "сохранённая точка в истории проекта",
  },
  {
    name: "Ветка",
    description: "отдельная линия изменений",
  },
  {
    name: "main",
    description: "основная стабильная ветка проекта",
  },
  {
    name: "Удалённый репозиторий",
    description: "версия проекта на GitHub",
  },
  {
    name: "Pull Request",
    description: "предложение добавить изменения из одной ветки в другую",
  },
];

const commands = [
  {
    name: "git status",
    description: "состояние проекта",
  },
  {
    name: "git diff",
    description: "текущие изменения",
  },
  {
    name: "git log --oneline",
    description: "краткая история коммитов",
  },
  {
    name: "git branch",
    description: "список веток",
  },
  {
    name: "git switch main",
    description: "перейти в main",
  },
  {
    name: "git pull",
    description: "получить изменения",
  },
  {
    name: "git push",
    description: "отправить коммиты",
  },
];

const Git = () => {
  return (
    <>
      <h1>Создание нового проекта и GIT</h1>
      <p>Для создания нового проекта используется команда</p>
      <CodeStyle>npm create vite@latest</CodeStyle>
      <h3>Как устроен новый проект</h3>
      <TableInfo data={newProject} />
      <h2>GIT</h2>
      <Info>
        Git — система контроля версий, которая работает локально. GitHub хранит
        Git-репозитории в интернете и добавляет инструменты для совместной
        работы: Pull Request, обсуждения и проверку изменений.
      </Info>
      <h3>Основные понятия</h3>
      <TableInfo data={concepts} />
      <h3>Полезные команды</h3>
      <TableInfo data={commands} />
      <Wrong>
        Не коммитить в React-проекте
        <ol>
          <li>node_modules;</li>
          <li>собранные файлы проекта;</li>
          <li>
            файлы с паролями, токенами и секретными переменными окружения.
          </li>
        </ol>
      </Wrong>
    </>
  );
};

export default Git;
