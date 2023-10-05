const express = require('express');
const listEditRouter = express.Router();

listEditRouter.post('/create', (req, res) => {
    // Aquí se obtiene los datos de la nueva tarea desde el cuerpo de la solicitud (req.body)
    const newTask = req.body;
    // Luego, agrega la tarea a la lista de tareas (tasks)
    // Supongamos que tienes un array llamado 'tasks' con todas las tareas
    // También puedes asignar un nuevo ID a la tarea si es necesario
    tasks.push(newTask);
    res.json(newTask);
  });
  