<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" :key="product.id" v-for="product in products">
            <product
              :isInCart="isInCart(product)"
              v-on:add-to-cart="addToCart(product)"
              :product="product"
            ></product>
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5">
        <cart v-on:pay="pay()" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
      </div>
    </div>
  </div>
</template>

<script>
// import products from "@/products.json";
import Product from "@/components/Product.vue";
import Cart from "@/components/Cart.vue";
import ProductDataService from "../services/ProductDataService";

export default {
  name: "app",
  components: {
    Product,
    Cart
  },
  data() {
    return {
       products: [],
      cart: []
    };
  },
  methods: {
      retrieveProducts() {
      ProductDataService.getAll()
        .then(response => {
          this.products = response.data;
        //   console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    addToCart(product) {
    //   var data = {
    //     product: product.id,
    //     quantity: parseInt(product.quantity)
    //   };  
      this.cart.push(product);
    },
    isInCart(product) {
      const item = this.cart.find(item => item.id === product.id);
      if (item) {
        return true;
      }
      return false;
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id);
    },
    pay() {
        var product = [];
        this.cart.forEach(function(item)
        {
            product.push({
                'product': item.id,
                'qty': 1
            })
        });
        var orders = {
            "orderItems" : product,
            "shippingAddress": {
                "address": "Dhaka",
                "city": "Dhaka",
                "postalCode": "1200",
                "country": "Bangladesh"
            }
        };
        ProductDataService.order(orders)
        .then(response => {
            this.product.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
        })
        .catch(e => {
            console.log(e);
        });
        this.cart = [];
        alert("Thanks! Shopping successfully completed. ");
    }
  },
  mounted() {
    this.retrieveProducts();
  }
};
</script>

<style>
body {
  background-color: #dcdcdc;
}
</style>