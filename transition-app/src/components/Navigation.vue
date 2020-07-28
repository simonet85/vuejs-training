<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <router-link class="navbar-brand" active-class="active" to="/home" exact
      >WeCode.com</router-link
    >
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    ></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item ">
          <router-link class="nav-link" to="/home" exact active-class="active"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/products"
            exact
            active-class="active"
            >Products</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/cart"
            exact
            active-class="active"
            >Cart</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    },
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
