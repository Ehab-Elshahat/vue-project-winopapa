<template>
  <div class="container">
    <h2 class="text-center my-4 p-4 bg-primary">Products Page</h2>
    <div class="row">
      <div class="col-lg-3" v-for="item in products" :key="item.name">
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
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: "Products",
  data(){
    return{
      products: [],
      ref: firebase.firestore().collection('products')
    }
  },
  created(){
    this.ref.onSnapshot(query => {
      this.products = []
      query.forEach(doc => {
        this.products.push({
          key:doc.id,
          name:doc.data().name,
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
  .card{
  min-height: 400px;
  max-height: max-content;
  margin-bottom: 20px;
}
</style>
