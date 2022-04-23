<template>
  <img :src="src" width="400" height="400">
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'my-logo',

  setup(props) {
    props = reactive(props);
    return {
      src: computed(() => ({
        'storybook-logo': true,
        'storybook-logo--logo': props.primary,
      })),
    }
  },
};
</script>
