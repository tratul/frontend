<template>
  <div class="container p-4">
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    User Login Form
                </div>
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" v-model="credential.email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="credential.password">
                        </div>
                        <div class="text-end">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
      return {
          credential: {
              email: 'admin@gmail.com',
              password: '123456'
          }
      }
  },
  methods:{
      login(){
          this.$store.dispatch('login', this.credential)
      }
  }
}
</script>