import CodeStyle from "../components/CodeStyle";
import Info from "../components/Info";
import TableInfo from "../components/TableInfo";
import Wrong from "../components/Wrong";

const reactHook = [
  {
    name: "Установка",
    description: "npm install react-hook-form",
  },
  {
    name: "Импорт",
    description: `import { useForm } from 'react-hook-form'`,
  },
  {
    name: "Инициализация хука",
    description:
      "const { register, handleSubmit, formState: { errors } } = useForm()",
  },
  {
    name: "Создание формы",
    description: `<form onSubmit={handleSubmit(onSubmit)}>
  {/* Поля формы */}
</form>`,
  },
  {
    name: "Добавление полей",
    description: `<input {...register('name')} />`,
  },
  {
    name: "Валидация",
    description: (
      <CodeStyle>{`<input
  type='number'
  {...register('age', {
    required: 'Обязательное поле',
    min: {
      value: 18,
      message: 'Вам должно быть 18 лет или больше'
    }
  })}
/>
<p>{errors.age?.message}</p>`}</CodeStyle>
    ),
  },
  {
    name: "Обработка отправки",
    description: `const onSubmit = (data) => {console.log(data)}`,
  },
  {
    name: "Кнопка отправки",
    description: `<button type="submit">Отправить</button>`,
  },
];

const formik = [
  {
    name: "Установка",
    description: "npm install formik",
  },
  {
    name: "Импорт",
    description: `import { Formik, Form, Field, ErrorMessage } from 'formik'`,
  },
  {
    name: "Создание формы",
    description: (
      <CodeStyle>{`<Formik
  initialValues={{ username: '', email: '' }}
  onSubmit={(values) => {
    console.log(values);
  }}
>
  <Form>
    {/* Элементы формы будут здесь */}
  </Form>
</Formik>`}</CodeStyle>
    ),
  },
  {
    name: "Добавление полей",
    description: (
      <CodeStyle>{`<Field type="text" name="username" placeholder="Имя пользователя" />
<ErrorMessage name="username" component="div" />`}</CodeStyle>
    ),
  },
  {
    name: "Валидация",
    description: (
      <CodeStyle>{`<Field
  type="email"
  name="email"
  placeholder="Электронная почта"
  validate={(value) => {
    let error;
    if (!value) {
      error = 'Поле обязательно';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      error = 'Некорректный адрес';
    }
    return error;
  }}
/>
<ErrorMessage name="email" component="div" />`}</CodeStyle>
    ),
  },
  {
    name: "Обработка отправки",
    description: `Formik автоматически обрабатывает отправку формы. Вызов функции onSubmit будет происходить только если все поля прошли валидацию`,
  },
  {
    name: "Кнопка отправки",
    description: `<button type="submit">Отправить</button>`,
  },
];

const Form = () => {
  return (
    <>
      <h1>Form</h1>
      <h2>Способы работы с формами в React</h2>
      <ol>
        <li>
          <b>Управляемые компоненты форм.</b> В этом подходе значения полей
          формы хранятся в состоянии компонента. Каждое поле формы связано с
          состоянием и обновляется через callback-функцию.
        </li>
        <li>
          <b>Неуправляемые компоненты форм.</b> В этом подходе значения полей
          формы хранятся непосредственно в DOM, а не в состоянии компонента.
        </li>
        <li>
          <b>Ref-подход.</b> В этом случае значения полей формы считываются
          через ref, которые позволяют получить доступ к DOM-элементам. Этот
          подход может быть удобен, когда тебе нужно быстро получить значения
          полей без явного сохранения их в состояние компонента (нет 🙂).
        </li>
        <li>
          <b>Библиотеки управления формами.</b> Существуют библиотеки, такие как
          React Hook Form и Formik, которые предоставляют более высокоуровневые
          решения для работы с формами. Они упрощают управление состоянием,
          валидацией, обработкой отправки и другими аспектами работы с формами.
        </li>
      </ol>
      <Info>
        Чаще всего как раз и используются библиотеки React Hook Form и Formik
      </Info>
      <h2>React Hook Form</h2>
      <a href="https://react-hook-form.com/">Документация</a>
      <h3>Основы использования</h3>
      <TableInfo data={reactHook} />
      <h3>Валидация</h3>
      <Wrong>
        Обрати внимание, что register не работает с компонентами Controller, и
        их нельзя комбинировать в одном поле. Тебе следует использовать либо
        register, либо Controller, в зависимости от твоих потребностей.
      </Wrong>
      Вот несколько ситуаций, когда стоит использовать Controller:
      <ol>
        <li>
          <b>Использование сторонних библиотек (ANTD или MUI).</b> React Hook
          Form сделал интеграцию с внешними библиотеками компонентов
          пользовательского интерфейса очень простой.
        </li>
        <li>
          <b>Использование сторонних библиотек валидации.</b> Если ты
          используешь сторонние библиотеки валидации, такие как yup или joi,
          Controller позволяет интегрировать их правила валидации с формой.
        </li>
      </ol>
      <h3>Пример интеграции React Hook Form + ANTD</h3>
      <CodeStyle>{`import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Radio, Checkbox, DatePicker, Button } from 'antd'

const FormWithRHFController = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <Controller
          name='email'
          control={control}
          rules={{
            required: 'Поле обязательно для заполнения',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: 'Введите корректный email'
            }
          }}
          render={({ field }) => <Input {...field} placeholder='Email' />}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Текст:</label>
        <Controller
          name='text'
          control={control}
          rules={{ required: 'Поле обязательно для заполнения' }}
          render={({ field }) => <Input {...field} placeholder='Текст' />}
        />
        <p>{errors.text?.message}</p>
      </div>

      <div>
        <label>Число:</label>
        <Controller
          name='number'
          control={control}
          rules={{ required: 'Поле обязательно для заполнения' }}
          render={({ field }) => (
            <Input type='number' {...field} placeholder='Число' />
          )}
        />
        <p>{errors.number?.message}</p>
      </div>

      <div>
        <label>Пол:</label>
        <Controller
          name='gender'
          control={control}
          rules={{ required: 'Выберите пол' }}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value='male'>Мужской</Radio>
              <Radio value='female'>Женский</Radio>
            </Radio.Group>
          )}
        />
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label>Чекбокс:</label>
        <Controller
          name='checkbox'
          control={control}
          rules={{ required: 'Подтвердите выбор' }}
          render={({ field }) => <Checkbox {...field}>Я согласен</Checkbox>}
        />
        <p>{errors.checkbox?.message}</p>
      </div>

      <div>
        <label>Дата:</label>
        <Controller
          name='date'
          control={control}
          rules={{ required: 'Выберите дату' }}
          render={({ field }) => <DatePicker {...field} />}
        />
        <p>{errors.date?.message}</p>
      </div>

      <Button type='primary' htmlType='submit'>
        Отправить
      </Button>
    </form>
  )
}

export default FormWithRHFController`}</CodeStyle>
      <h2>Formik</h2>
      <a href="https://formik.org/">Документация</a>
      <TableInfo data={formik} />
      <h3>Пример использования</h3>
      <CodeStyle>{`import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field type="text" name="username" placeholder="Имя пользователя" />
        <ErrorMessage name="username" component="div" />

        <Field
          type="email"
          name="email"
          placeholder="Электронная почта"
          validate={(value) => {
            let error;
            if (!value) {
              error = 'Поле обязательно';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
              error = 'Некорректный адрес';
            }
            return error;
          }}
        />
        <ErrorMessage name="email" component="div" />

        <button type="submit">Зарегистрироваться</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;`}</CodeStyle>
      <Info>
        <h3>Что выбрать: react-hook-form или formik</h3>
        <ul>
          <li>
            Используй react-hook-form, если тебе нужна более производительная
            библиотека с отложенной валидацией и ты хочешь более гибко управлять
            компонентами формы.
          </li>
          <li>
            Используй formik, если тебе нужен более широкий набор
            функциональности, включая комплексную валидацию, и удобство
            использования, особенно для сложных форм.
          </li>
        </ul>
      </Info>
    </>
  );
};

export default Form;
