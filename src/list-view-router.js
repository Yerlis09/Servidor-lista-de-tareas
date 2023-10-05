const express = require('express');
const listViewRouter = express.Router();

listViewRouter.get('/completed', (req, res) => {
    // Aquí debes obtener y enviar las tareas completas desde la lista de tareas
    // Supongamos que tenemos un array llamado 'tasks' con todas las tareas
  
    const completedTasks = tasks.filter((task) => task.isCompleted === true);
    res.json(completedTasks);
  });
  
  listViewRouter.get('/incomplete', (req, res) => {
    // Aquí se debe obtener y enviar las tareas incompletas desde la lista de tareas
  
    const incompleteTasks = tasks.filter((task) => task.isCompleted === false);
    res.json(incompleteTasks);
  });
  