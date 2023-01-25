
<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <form @submit.prevent="addTodo">
      <div class="form-group">
        <label for="newTodo">What do yo have to do?</label>
        <input v-model="newTodo" type="text" class="form-control" id="newTodo" aria-describedby="newTodoHelp" placeholder="Do laundry...">
        <small id="newTodoHelp" class="form-text text-muted">Input a new to do</small>
      </div>
      <button type="submit" class="btn btn-primary" style="margin-bottom: 15px">Add</button>
    </form>
    <ul class="list-group">
      <li v-for="todo in todos" :key="todo" class="list-group-item list-group-item-primary" style="width:500px; display: flex; align-items: center;  justify-content: space-between;">
        <button 
          @click="doneTask(todo)" 
          v-if="!todo.done"
          class="btn btn-success" 
          style="margin-right: 15px">
          Done
        </button>
        <button 
          @click="undoTask(todo)" 
          v-if="todo.done"
          class="btn btn-secondary" 
          style="margin-right: 15px">
          Undo
        </button>
        
        <span :class="{

          isDone:todo.done

          }">{{todo.title}}
        </span>

        <button @click="deleteTask(todo)"
          class="btn btn-danger"
          style="margin-left: 15px">
          Delete
        </button>
      </li>
    </ul>
 
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required } from  '@vuelidate/validators';

export default {
  name: 'App',

 
  data(){
    return{
      v$: useValidate(),
      newTodo: '',
      todos: [],
   
    }
  },
  validations(){
    return{
      newTodo: {required}
    }
  },
  methods: {
    addTodo(){
      this.v$.$validate();
      if (!this.v$.$error){
        this.todos.push(
          {
            title: this.newTodo,
            done: false
          }
        );
      }else{
        alert("Form didn't pass validation");
      }
      this.newTodo = '';
    },
    doneTask(todo){
      todo.done = true;
    },
    undoTask(todo){
      todo.done = false;
    },
    deleteTask(todo){
      this.todos.splice(this.todos.indexOf(todo),1);
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  display:flex;
  flex-direction: column;
}
.form-group{
  display:flex;
  flex-direction: column;
  margin: 15px;
}
.isDone{
  text-decoration: line-through;
}
</style>
