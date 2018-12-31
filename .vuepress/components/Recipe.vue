<template>
  <article class="recipe">
    <header>
      <h1 v-text="title" />
      <p class="description" v-html="description" v-if="description" />
    </header>

    <h2>Ingredients:</h2>
    <ul>
      <li v-for="(ingredient, idx) in data.ingredients" :key="idx">
        <span class="quantity" v-html="ingredient.quantity" v-if="ingredient.quantity" />
        <span class="label" v-text="ingredient.label" />
        <span class="note" v-text="ingredient.note" v-if="ingredient.note" />
      </li>
    </ul>

    <h2>Directions:</h2>
    <ol>
      <li v-for="direction in data.directions" v-html="direction" />
    </ol>

    <Note v-if="data.notes" v-for="(note,idx) of data.notes" :text="note.text" :label="note.label" :key="idx" />
  </article>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    title: String,
    description: String,
    data: Object
  }
};
</script>

<style scoped>
  span.quantity {
    font-weight: bolder;
  }
  span.note {
    color: #aaa;
  }
</style>
