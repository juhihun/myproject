<template>
    <div>
        <input v-model="form.userid">
        <input v-model="form.userpw">
        <button @click.prevent="loginHandler">로그인</button>
    </div>
</template>

<script>
import axios from "axios";

export default { 
    data() { 
        return {
            form:{userid:'',userpw:''}
        }
    },
    created() {
        
    },
    methods: {
        loginHandler(){
            axios.post('/api/login',this.form)
            .then(result => console.log(result.data))
            
        }
    }
}
</script>

<style>
</style>