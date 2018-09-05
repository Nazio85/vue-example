<template>
  <div>
    <div class="header">

    </div>
    <div class="body">
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
  import ProductList from "./product/ProductList";
  export default {
      components: {ProductList}
  }
</script>

<style scoped>
  .body{
    padding: 15px;
  }
</style>
