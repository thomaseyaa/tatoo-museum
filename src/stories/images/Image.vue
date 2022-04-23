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
        'storybook-image': true,
        'storybook-image--image1': props.primary,
        'storybook-image--image2': !props.primary,
        'storybook-image--image3': !props.primary,
        'storybook-image--image4': !props.primary,
        'storybook-image--image5': !props.primary,
      })),
    }
  },
};
</script>
