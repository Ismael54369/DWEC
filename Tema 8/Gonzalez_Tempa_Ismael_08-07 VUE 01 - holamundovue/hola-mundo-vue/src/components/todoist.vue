<template>
  <div class="task-list">
    <h1>Tienes pendientes {{ tasks.length }} tareas</h1>
    
    <form class="form" @submit.prevent="createTask">
      <label class="label" for="task">Nueva tarea:</label>
      <input class="input" type="text" v-model="newTask" id="task" />
      <input class="button" type="submit" value="Crear tarea" />
    </form>
    
    <ul class="list">
      <li class="task"
          v-for="(task, i) in tasks"
          :key="'task' + i"
          :class="{ completed: task.completed }"
          @click="completeTask(task.text)">
        {{ task.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data: () => ({ 
    newTask: "", 
    tasks: [] 
  }),
  methods: {
    createTask() {
      // Evitamos crear tareas vacías
      if (this.newTask.trim() === "") return; 

      let task = {
        text: this.newTask,
        completed: false
      };
      this.tasks.push(task);
      this.newTask = ""; // Limpiamos el input
      console.log(this.tasks);
    },
    completeTask(taskText) {
      for (let i = 0; i < this.tasks.length; i++) {
        let task = this.tasks[i];
        if (taskText === task.text) {
          task.completed = !task.completed; // Alterna entre true/false
        }
      }
    }
  }
};
</script>

<style scoped>
.task-list {
  width: 800px;
  max-width: 100%;
  margin: 0px auto;
  font-family: sans-serif;
}
.form {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 10px 22px -1px rgba(0,0,0,0.25);
  margin-top: 10px;
}
.label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}
.input { 
  height: 35px; 
  width: 60%;
  padding: 5px;
}
.button {
  margin-left: 20px;
  height: 45px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  background-color: #2ecc71;
  color: #ecf0f1;
  cursor: pointer;
  font-weight: bold;
}
.list { margin-top: 40px; padding: 0; list-style: none; }
.task { 
  cursor: pointer; 
  margin: 10px 0; 
  padding: 10px;
  background: #f9f9f9;
  border-radius: 5px;
  transition: 0.3s;
}
.task:hover { background: #eee; }
.completed { 
  text-decoration: line-through; 
  color: lightgrey; 
  background: #f0f0f0;
}
</style>