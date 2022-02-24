<template>
    <div>
           <h2>  Log In To View Your Student Profile </h2>
        <form class="login-form" @submit.prevent="submitForm">
            <label for="username">
                Username
            </label>
            <input type="text" placeholder="Username" v-model="username"/>
        
        <label for="username">
                Password
            </label>
            <input type="password" placeholder="password" v-model="password"/>
        
            
            
            <button @click="submitForm">Log In</button>
            
                        <router-link to="/signin"> 
 <input type="submit" value="Sign up instead">

            </router-link>


        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submitForm(){
            console.log(this.username, this.password)
        }
    }
}
</script>

 <style scoped>
</style>