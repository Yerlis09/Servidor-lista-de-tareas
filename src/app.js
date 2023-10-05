const express = require('express');
const app = express();

// Arreglo de tareas
const tasks = [
  { id: '123456', isCompleted: false, description: 'Walk the dog' },
  { id: '789012', isCompleted: true, description: 'Buy groceries' },
  { id: '345678', isCompleted: false, description: 'Finish work project' },
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Puerto en el que escuchará el servidor
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
