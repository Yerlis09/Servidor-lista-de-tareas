const express = require('express');
const listViewRouter = express.Router();

listViewRouter.get('/completed', (req, res) => {
    // Aquí debes obtener y enviar las tareas completas desde la lista de tareas
    // Supongamos que tenemos un array llamado 'tasks' con todas las tareas
  
    const completedTasks = tasks.filter((task) => task.isCompleted === true);
    res.json(completedTasks);
  });
  