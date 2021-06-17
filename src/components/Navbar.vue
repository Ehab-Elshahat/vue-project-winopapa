<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item" v-if="user==null">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" to="/Products"
                >Products</router-link
              >
            </li>
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" to="/MyProducts"
                >My Products</router-link
              >
            </li>
            <li class="nav-item" v-if="user==null">
              <router-link class="nav-link" to="/Signin">Sign in</router-link>
            </li>
            <li class="nav-item" v-if="user==null">
              <router-link class="nav-link" to="/Signup">Sign up</router-link>
            </li>
            <li class="nav-item" v-if="user">
              <router-link class="nav-link" to="/Logout" @click.native="logOut"
                >Log out</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import firebase from "firebase";
import router from "../router";

export default {
  name: "Navbar",
  data() {
    return {
      user: null
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.user = currentUser
      } else {
        this.user = null
      }
    })
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("uidUser")
          router.push({
            name: "Signin",
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #ffc107;
}
</style>
