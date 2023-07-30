<script setup lang="ts">
    import { ref } from 'vue';
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
    const email = ref("")
    const password = ref("")

    const register = () => {
        createUserWithEmailAndPassword(getAuth())
    }
    const signInWithGoogle = () => {

    }

</script>
<template>
    <h1>Create an Account</h1>
    <div>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="register">Submit</button>
        <button @click="signInWithGoogle"> Sign In With Google </button>
    </div>
</template>