<template>
  <aside class="note">
    <p><strong>{{ label || "NOTE" }}:</strong> {{ text }}</p>
  </aside>
</template>

<script>
export default {
  name: "Note",
  props: {
    text: String,
    label: String
  }
};
</script>

<style scoped>
  aside.note {
    background-color: #dedede;
    margin: 20px 0;
    padding: 2px 20px;
  }
</style>
