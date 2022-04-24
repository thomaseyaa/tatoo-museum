<template>
  <img :src="src">
</template>

<script>
export default {
  name: 'my-illustration',

  props: {
    src: {
      type: String,
      required: true,
    },
  }
};
</script>
