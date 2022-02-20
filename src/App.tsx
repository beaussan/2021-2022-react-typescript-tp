import { useState } from 'react'
import { faker } from '@faker-js/faker';
import { TodoItem } from './TodoItem';


const generateFakeTodoItem = () => ({
  label: faker.hacker.phrase(),
  status: faker.helpers.randomize(['open', 'done', 'archived']),
});

const generateNTodo = (size) => {
  return Array.from(Array(size).keys()).map(generateFakeTodoItem);
}

const initialList = [{
  label: "This is my first todo item",
  status: 'open'
}, {
  label: "This is some done todo",
  status: 'done'
}, {
  label: "This is a really old todo",
  status: 'archived'
}, ...generateNTodo(10)]

function App() {
  const [todoList, setTodoList] = useState(initialList);

  return (
    <div className="bg-white shadow rounded-lg py-8">
      <div className="divide-gray-300 divide-y">
      {todoList.map(item => (<TodoItem label={item.label} status={item.status} />))}

      </div>
    </div>
  )
}

export default App
