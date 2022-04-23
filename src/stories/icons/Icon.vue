<template>
  <img :src="src" width="100" height="100">
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'my-icon',

  setup(props) {
    props = reactive(props);
    return {
      src: computed(() => ({
        'storybook-icon': true,
        'storybook-icon--search': props.primary,
        'storybook-icon--tel': !props.primary,
        'storybook-icon--User': !props.primary,
        'storybook-icon--Instagram': !props.primary,
        'storybook-icon--Snapchat': !props.primary,
        'storybook-icon--Facebook': !props.primary,
        'storybook-icon--Twitter': !props.primary,
        'storybook-icon--Linkedin': !props.primary,
        'storybook-icon--Palette': !props.primary,
      })),
    }
  },
};
</script>
