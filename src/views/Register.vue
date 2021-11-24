<template>
  <div class="container p-4">
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    User Registration Form
                </div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" v-model="fromdata.name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" v-model="fromdata.email">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="fromdata.password">
                        </div>
                        <div class="text-end">
                            <button type="submit" class="btn btn-primary">Register</button>
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
  name: 'Register',
  data(){
      return {
          fromdata: {
              name: null,
              email: null,
              password: null
          }
      }
  },
  methods:{
      register(){
          this.$store.dispatch('register', this.fromdata).then(res=>{
              //eslint-disable-next-line no-undef
              toastr.success(res.message)
              this.$router.push({
                  name: 'Login'
              })
          }).catch(error=> {
            // eslint-disable-next-line no-unused-vars
            for(const [k , v] of Object.entries(error.response.data.errors)){
                //eslint-disable-next-line no-undef
                toastr.error(v)
            } 
        })
      }
  }
}
</script>