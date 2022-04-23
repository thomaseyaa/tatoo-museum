<template>
  <img :src="src">
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'my-illustration',

  setup(props) {
    props = reactive(props);
    return {
      src: computed(() => ({
        'storybook-illustration': true,
        'storybook-illustration--illustration1': props.primary,
        'storybook-illustration--illustration2': !props.primary,
      })),
    }
  },
};
</script>
