const express = require('express');
const app = express();
const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

// Arreglo de tareas
const tasks = [
  { id: '123456', isCompleted: false, description: 'Walk the dog' },
  { id: '789012', isCompleted: true, description: 'Buy groceries' },
  { id: '345678', isCompleted: false, description: 'Finish work project' },
];

// Implementa el router listViewRouter con la ruta /tasks/completed
listViewRouter.get('/completed', (req, res) => {
  // Filtra y obtén las tareas completas desde la lista de tareas
  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  // Responde con un JSON que contiene las tareas completas
  res.json(completedTasks);
});

// se monta los routers en rutas específicas
app.use('/tasks', listViewRouter);
app.use('/tasks', listEditRouter);

// Puerto en el que escuchará el servidor
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

