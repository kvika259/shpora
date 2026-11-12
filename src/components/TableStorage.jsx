import { Table } from "antd";

const data = [
  {
    name: "Время хранения",
    LocalStorage: "Постоянное (данные сохраняются между сессиями)",
    SessionStorage: "Временное (данные действуют, пока открыта вкладка)",
    Cookies: "Зависит от установленных параметров (можно задать срок)",
  },
  {
    name: "Объём данных",
    LocalStorage: "~5–10 МБ",
    SessionStorage: "~5–10 МБ",
    Cookies: "До 4 КБ на один cookie",
  },
  {
    name: "Формат хранения",
    LocalStorage: "Строки (обычно с использованием JSON)",
    SessionStorage: "Строки (обычно с использованием JSON)",
    Cookies: "Строки",
  },
  {
    name: "Доступность",
    LocalStorage: "Доступен только на стороне клиента",
    SessionStorage: "Доступен только на стороне клиента",
    Cookies: "Доступны и клиенту, и серверу (отправляются с каждым запросом)",
  },
  {
    name: "Передача данных",
    LocalStorage: "Не передаются на сервер с запросами",
    SessionStorage: "Не передаются на сервер с запросами",
    Cookies: "Автоматически отправляются серверу при каждом HTTP-запросе",
  },
  {
    name: "Применение",
    LocalStorage: "Сохранение настроек, кеш, постоянные данные",
    SessionStorage: "Временные данные, состояние интерфейса",
    Cookies: "Аутентификация, отслеживание сессий, аналитика",
  },
];

const columns = [
  { title: "Характеристика", dataIndex: "name", key: "name" },
  { title: "Local Storage", dataIndex: "LocalStorage", key: "LocalStorage" },
  {
    title: "Session Storage",
    dataIndex: "SessionStorage",
    key: "SessionStorage",
  },
  { title: "Cookies", dataIndex: "Cookies", key: "Cookies" },
];
const TableStorage = () => (
  <Table
    showHeader={true} //убрала шапку
    pagination={false} //убрала внизу вывод по страницам
    columns={columns}
    dataSource={data}
  />
);
export default TableStorage;
