<template>
  <div class="container">
    <h2 class="text-center my-4 p-4 bg-primary">Sign up Page</h2>

    <form class="w-50 m-auto" @submit.prevent="register">

      <div class="form-group mb-4">
        <label class="mb-2" for="exampleInputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="user.name"
        />
      </div>

      <div class="form-group mb-4">
        <label class="mb-2" for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="user.email"
        />
      </div>
      <div class="form-group mb-4">
        <label class="mb-2" for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router";
export default {
  name: "Signup",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      },
      ref: firebase.firestore().collection('users')
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((newUser) => {
       
        this.ref.add({
          name:this.user.name,
          email: this.user.email,
          uid: newUser.user.uid
        })
        router.push({
          name: "Home"
        })
      })
    }
  }
};
</script>
