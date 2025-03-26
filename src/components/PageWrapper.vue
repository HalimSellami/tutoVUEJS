<template>
  <div class="food-app-wrapper-container">
    <nav>
        <a href="home">Home</a>
        <a href="fav">Favorites</a>
        <a href="meals">Meals</a>
    </nav>
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
    <slot>
        <p>Default Wrapper Content</p>
    </slot>
    <footer>The food app</footer>
  </div>
</template>

<script>
export default {
  name: 'FoodAppPageWrapper',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    subtitle: {
      type: String,
      default: 'subtitle',
    },
  },
};
</script>

<style scoped>

</style>
