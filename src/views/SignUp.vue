<template>
    <div>
           <h2>  Create Your Student Profile </h2>
        <form class="login-form" @submit.prevent="submitForm">
            <label for="FirstName">
                FirstName
            </label>
            <input type="text" placeholder="FirstName" v-model="firstname"/>
        
        <label for="LastName">
                LastName
            </label>
            <input type="text" placeholder="LastName" v-model="lastname"/>
        
        <label for="Faculty">
                Faculty
            </label>
            <input type="text" placeholder="Faculty" v-model="faculty"/>
        
        <label for="Department">
                Department
            </label>
            <input type="text" placeholder="Department" v-model="dept"/>
        
<label for="year">What year are you in?</label>

<select v-model="year" >
  <option value="100">100</option>
  <option value="200">200</option>
  <option value="300">300</option>
  <option value="400">400</option>
    <option value="500">500</option>

</select>
            <label for="username">
                Username
            </label>
            <input type="text" placeholder="Username" v-model="username"/>
        
        <label for="username">
                Password
            </label>
            <input type="password" placeholder="password" v-model="password"/>
           
           
<button @click="submitForm">Sign In</button>
            
                        <router-link to="/signin"> 
 <input type="submit" value="Log in instead">

            </router-link>
        
        
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            year: '',
            firstname: '',
            lastname: '',
            faculty: '',
            dept: ''

        }
    },
    methods: {
        submitForm(){
            console.log(this.username, this.password, this.year, this.password, this.firstname, this.lastname, this.faculty, this.dept, this.year)
        }
    }
}
</script>

 <style scoped>
</style>