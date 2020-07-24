const http = new FetchAPILibrary();

// GET
http
  .get('https://jsonplaceholder.typicode.com/todos')
  .then((tasks) => console.log(tasks))
  .catch((err) => console.log(err));

// POST
const taskBody = {
  completed: true,
  title: 'quis ut nam facilis et officia qui',
  userId: 7,
};
http
  .post('https://jsonplaceholder.typicode.com/todos', taskBody)
  .then((tasks) => console.log(tasks))
  .catch((err) => console.log(err));

// PUT
const updateTaskBody = {
  completed: true,
  title: 'quis ut nam facilis et officia qui',
  userId: 67,
};
http
  .put('https://jsonplaceholder.typicode.com/todos/67', updateTaskBody)
  .then((tasks) => console.log(tasks))
  .catch((err) => console.log(err));

// DELETE
http
  .delete('https://jsonplaceholder.typicode.com/todos/3')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
