<template >


  <div id="myDIV">
    
    <button v-on:click="GET">GET all employees</button>
     <div>
       <br>
    <button v-if="!isHidden" v-on:click="POST">POST all employees</button>
  </div>  

      <div class="container">
       
        
        <table v-if="isHidden" class="table table-hover">
           
            <thead>
            <tr>
                <td>ID</td><br><br>
                <td> Name</td><br>
                <td>Skills</td><br>
                <td>phone</td><br>
                                <td>Salary</td><br>
                <td>birthDate</td><br>
                <td>absenceDays</td><br>
                <td>degree</td><br>
                <td>departmentId</td><br>
         
             <td>ProjectId</td><br>
             <td>position</td><br>
             <td>Image</td><br>
             
           
            </tr>
            </thead>
            <tbody>
               <tr v-for="value in data" :key="value._id">
                    <td>{{ value._id }}</td><br><br>
                    <td>{{ value.name }}</td><br>
                    <td>{{ value.skills }}</td><br>
                    <td>{{ value.phone }}</td><br>
                    <td>{{ value.birthDate }}</td><br>
                    <td>{{ value. absenceDays}}</td><br>
                    <td>{{ value.departmentId }}</td><br>
                    <td>{{ value.ProjectId }}</td><br>
                    <td>{{ value.position }}</td><br>
                    <td>{{ value.Image }}</td><br>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
   <br>
 
 
  </div>
  
</template>

<script>
//import formm from './form.vue'
console.log("ds");
 import axios from 'axios';
export default {
  name: 'employee',
  components:{},
  data(){
    return{
      data:[],
      isHidden: false
    }
  },
  components:{

  },
  methods: {
    GET: function(){
      console.log("sajbikdj")
        axios.get('http://localhost:3000/HR-System')
      .then(response => {
        console.log("adss")      
         this.data = response.data
         this.isHidden = true
      
   
      })},
      POST:function(){
        console.log("sdcad")
      }

  }
}



</script>

<style>
  table {
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
    padding: 10px;
    text-align: left;
  }
</style>