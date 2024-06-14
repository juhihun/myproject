<template>
    <div v-if="account">
       <!-- {{  loginid  }} -->
        {{ account.userid }}
        <button @click="logoutHandler">로그아웃</button>
    </div>
        <div v-else>
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
            form:{userid:'',userpw:''},
            //loginid : ''
        }
    },
    computed:{
        account(){
            return this.$store.state.user.userid;
        }
    },
    created() {
        axios.get("/api/account") 
        .then(result =>{
           // this.loginid = result.data.userid;
            this.$store.commit('user',result.data); //local에 저장
        }).catch((err)=>{
            console.log(err)
            console.log('로그인필요')})
    },
    methods: {
        loginHandler(){
            axios.post('/api/login',this.form)
            .then((result)=>{
                //this.loginid = result.data.userid;
                //새로고침해도 정보 저장
                this.$store.commit('user',result.data);
                alert('로그인성공')})
            .catch((err)=>{
                console.log(err)
                alert('로그인실패')})
            
        },
        logoutHandler(){
            axios.post('/api/logout',this.form)
            .then(()=>{
                this.$store.commit('user',{});
                alert('로그아웃 성공')
            }).catch((err)=>{
                console.log(err)
                alert('로그아웃실패')
            })
        }
    }
}
</script>

<style>
</style>