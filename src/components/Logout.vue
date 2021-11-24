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
        })
    })
  }
}
</script>