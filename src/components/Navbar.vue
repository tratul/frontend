<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{name:'Home'}"><img src="../assets/logo.png" class="w-25" alt=""></router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" :to="{name:'About'}">About</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'Navbar',
  components: {
  }
}
</script>