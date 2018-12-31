<template>
  <article class="recipe">
    <header>
      <h1 v-text="title" />
      <p v-html="description" v-if="description" class="description" />
    </header>

    <Recipe v-for="(recipe, idx) of data"
      :title="recipe.label"
      :data="recipe"
      :key="idx" />
  </article>
</template>

<script>
export default {
  name: "RecipeGroup",
  props: {
    title: String,
    description: String,
    data: Array
  }
};
</script>
