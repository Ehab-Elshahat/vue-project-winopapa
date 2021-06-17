<template>
  <div class="container">
    <h2 class="text-center my-4 p-4 bg-primary">My Productes Page</h2>

    <button class="btn btn-success rounded-0 mb-4" @click="addProduct()">Add Product</button>

    <div class="modal-container" v-if="showAddModal">
      <div class="product w-50 m-auto">
        <h3 class="text-center my-4 bg-dark p-4 text-white">Product Details</h3>
        <form @submit.prevent="newProduct">
          <input type="text" class="form-control rounded-0 my-4" placeholder="Product Title" v-model="product.name">
          <input type="number" class="form-control rounded-0 my-4" placeholder="Product Pric" v-model="product.price">
          <input type="text" class="form-control rounded-0 my-4" placeholder="Product Image" v-model="product.image">
          <textarea class="form-control rounded-0 my-4" placeholder="Description" v-model="product.description"></textarea>
          <div class="alert alert-success" v-if="messageSuccess">{{messageSuccess}}</div>
          <button type="submit" class="btn btn-success rounded-0 mb-4">save</button>
        </form>
      <button class="btn btn-danger rounded-0" @click="closeModal()">close</button>
      </div>
      
      

    </div>

    <div class="row">
      <div class="col-lg-3" v-for="item in myproducts" :key="item.name">
        <div class="card">
          <img
            class="card-img-top"
            :src="item.image"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <h5 class="card-title">{{item.price}}</h5>
            <p class="card-text">
              {{item.description}}
            </p>
            <a href="#" class="btn btn-secondary">Go somewhere</a>
            <button class="btn btn-success d-block mt-4" @click="update(item.key)">Update</button>
            <button class="btn btn-danger mt-4 ">Delete</button>
          </div>
        </div>
      </div>
    </div>
  

  </div>
</template>

<script>
import firebase from "firebase";
// import router from "../router";
export default {
  name: "Myproducts",
  data() {
    return {
      showAddModal: false,
      product:{
        name: "",
        price: 0,
        image: "",
        description:"",
        uid: localStorage.getItem('uidUser')
      },
      ref: firebase.firestore().collection('products'),
      messageSuccess: "",
      myproducts:[],
      uid: localStorage.getItem("uidUser")
    };
  },
  methods: {
    addProduct() {
      this.showAddModal = !this.showAddModal;
    },
    closeModal() {
      this.showAddModal = false;
    },
    newProduct() {
      this.ref.add({
        name : this.product.name,
        price : this.product.price,
        image : this.product.image,
        description : this.product.description
      }).then(() => {
        this.messageSuccess = 'Added'
      }).then(() => {
        this.product.name = '',
        this.product.price = '',
        this.product.image = '',
        this.product.description = ''
      })
    },
    update() {
      console.log("Update")
      this.showAddModal= true
      // this.ref.doc(key).update({
      //   name: '',
      //   price: '',
      //   description: '',
      //   image: ''
      // })
    }
  },
  created() {
    this.ref.onSnapshot(query => {
      this.myproducts= [],
      query.forEach(doc => {
        
          this.myproducts.push({
          key:doc.id,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
          image: doc.data().image
        })
        
        
      })
    })
  }
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 1000;
}
.card{
  min-height: 400px;
  max-height: max-content;
  margin-bottom: 20px;
}
</style>
