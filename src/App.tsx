import { useState } from 'react';
import { faker } from '@faker-js/faker';

const generateFakeTodoItem = () => ({
  label: faker.hacker.phrase(),
  status: faker.random.arrayElement(['open', 'done', 'archived']),
  id: faker.string.uuid(),
});

const generateNTodo = (size) => {
  return Array.from(Array(size).keys()).map(generateFakeTodoItem);
};

const initialList = [
  {
    label: 'This is my first todo item',
    status: 'open',
    id: faker.string.uuid(),
  },
  {
    label: 'This is some done todo',
    status: 'done',
    id: faker.string.uuid(),
  },
  {
    label: 'This is a really old todo',
    status: 'archived',
    id: faker.string.uuid(),
  },
  ...generateNTodo(10),
];

const TodoItem = ({ status, label, onChecked }) => {
  return (
    <div
      className={clsx('p-4 flex items-center', {
        'bg-gray-200': status === 'archived',
      })}
    >
      <span
        className={clsx('w-full block', { 'line-through': status !== 'open' })}
      >
        {label}
      </span>
      <input
        checked={status !== 'open'}
        disabled={status === 'archived'}
        type="checkbox"
        className="rounded text-pink-500 ml-8 cursor-pointer disabled:cursor-not-allowed disabled:bg-black disabled:hover:bg-black"
        onChange={() => onChecked(status === 'open' ? 'done' : 'open')}
      />
    </div>
  );
};


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
