import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { TodoItem } from './TodoItem';
import { nanoid } from 'nanoid';

const generateFakeTodoItem = () => ({
  label: faker.hacker.phrase(),
  status: faker.random.arrayElement(['open', 'done', 'archived']),
  id: nanoid(),
});

const generateNTodo = (size) => {
  return Array.from(Array(size).keys()).map(generateFakeTodoItem);
};

const initialList = [
  {
    label: 'This is my first todo item',
    status: 'open',
    id: nanoid(),
  },
  {
    label: 'This is some done todo',
    status: 'done',
    id: nanoid(),
  },
  {
    label: 'This is a really old todo',
    status: 'archived',
    id: nanoid(),
  },
  ...generateNTodo(10),
];

function App() {
  const [todoList, setTodoList] = useState(initialList);

  const updater = (id, newStatus) => {
    setTodoList((oldList) =>
      oldList.map((it) => {
        if (it.id !== id) {
          return it;
        }
        return {
          ...it,
          status: newStatus,
        };
      }),
    );
  };

  return (
    <div className="bg-white shadow rounded-lg py-8">
      <div className="divide-gray-300 divide-y">
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            label={item.label}
            status={item.status}
            onChecked={(newState) => updater(item.id, newState)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
