<template>
    <div></div>
</template>

<script>

export default {
  name: 'Logout',
  created() {
      this.$store.dispatch('logout').then(res=>{
        //eslint-disable-next-line no-undef
        toastr.success(res.message)
        this.$router.push({
            name: 'Login'
        }).catch(error=> {
          //eslint-disable-next-line no-unused-vars
          for(const [k , v] of Object.entries(error.response.data.errors))
          //eslint-disable-next-line no-undef
          toastr.error(v)
        })
    })
  }
}
</script>