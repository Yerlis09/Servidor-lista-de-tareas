const express = require('express');
const listEditRouter = express.Router();

listEditRouter.post('/create', (req, res) => {
    // se obtienen los datos de la nueva tarea desde el cuerpo de la solicitud (req.body)
    const newTask = req.body;
  
    // se Asigna el nuevo ID (si es necesario) y agrega la tarea a la lista de tareas
    // Aquí suponemos que cada tarea tiene una propiedad 'id'
    // newTask.id = newTaskId;
    tasks.push(newTask);
    res.json(newTask);
  });
  
  
  listEditRouter.delete('/delete/:id', (req, res) => {
    const taskId = req.params.id;
  
    // Encuentra la tarea correspondiente en la lista de tareas (tasks)
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
  
    if (taskIndex !== -1) {
      // Si se encuentra la tarea, se elimina del array tasks
      const deletedTask = tasks.splice(taskIndex, 1)[0];
      res.json({ message: `Tarea eliminada con éxito: ${taskId}`, deletedTask });
    } else {
      // Si no se encuentra la tarea, responde con un error
      res.status(404).json({ error: `No se encontró la tarea con el ID: ${taskId}` });
    }
  });
  
  listEditRouter.put('/update/:id', (req, res) => {
    const taskId = req.params.id;
  
    // Obtén los datos actualizados de la tarea desde el cuerpo de la solicitud (req.body)
    const updatedTaskData = req.body;
  
    // Busca la tarea correspondiente en la lista de tareas (tasks) por su ID
    const taskToUpdate = tasks.find(task => task.id === taskId);
  
    // Si no se encuentra la tarea, responde con un error
    if (!taskToUpdate) {
      return res.status(404).json({ error: `Tarea con ID ${taskId} no encontrada` });
    }
  
    // Actualiza la tarea con los nuevos datos
    // Suponemos que cada tarea tiene una propiedad 'id' y actualizamos todas las propiedades relevantes
    // Por ejemplo, puedes actualizar 'description' y 'isCompleted'
    taskToUpdate.description = updatedTaskData.description;
    taskToUpdate.isCompleted = updatedTaskData.isCompleted;
  
    res.json({ message: `Tarea actualizada con éxito: ${taskId}` });
  });
  


  module.exports = listEditRouter;

