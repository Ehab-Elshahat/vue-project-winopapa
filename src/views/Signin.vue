<template>
  <div class="container">
    <h2 class="text-center my-4 p-4 bg-primary">Sign In Page</h2>
    <form class="w-50 m-auto" @submit.prevent="loginUser">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="user.password"
        />
      </div>

      <div class="alert alert-danger" role="alert" v-if="erroreMessage">
        {{ erroreMessage }}
      </div>

      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router";

export default {
  name: "Signin",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      erroreMessage: "",
    };
  },
  methods: {
    loginUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((dataUser) => {
          localStorage.setItem("uidUser", dataUser.user.uid)
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          this.erroreMessage = error.message;
        });
    },
  },
};
</script>
