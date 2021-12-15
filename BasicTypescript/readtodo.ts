import axios from "axios";

// กำหนด url สำหรับอ่าน API
const url = "https://jsonplaceholder.typicode.com/todos/5";

// กำหนด Interface เพื่อไว้กำหนดรูปแบบตัวแปร
// interface, type
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo: Todo = res.data;

  const id = todo.id;
  const title = todo.title;
  const userId = todo.userId
  const completed = todo.completed

  // console.log(todo);
  console.log({id,title,userId,completed});
});
