<template>
  <div v-if="currentProduct" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentProduct.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentProduct.description"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price"
          v-model="currentProduct.price"
        />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="text" class="form-control" id="quantity"
          v-model="currentProduct.quantity"
        />
      </div>

      <!-- <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProduct.published ? "Published" : "Pending" }}
      </div> -->
    </form>

    <button type="submit" class="btn btn-success mt-3"
      @click="updateProduct"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";

export default {
  name: "product-update",
  data() {
    return {
      currentProduct: null,
      message: ''
    };
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
        .then(response => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateProduct() {
      var data = {
        name: this.currentProduct.name,
        description: this.currentProduct.description,
        price: parseInt(this.currentProduct.price),
        quantity: parseInt(this.currentProduct.quantity)
      };
      ProductDataService.update(this.currentProduct.slug, data)
        .then(response => {
          console.log(response.data);
          this.message = 'The product was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getProduct(this.$route.params.slug);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>