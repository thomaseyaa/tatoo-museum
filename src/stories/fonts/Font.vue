<template>
  <span :class="classes">{{ label }}</span>
</template>

<script>
import './font.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-font',

  props: {
    label: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-font': true,
        'storybook-font--text1': props.primary,
        'storybook-font--text2': !props.primary,
        'storybook-font--text3': !props.primary,
        'storybook-font--text4': !props.primary,
      })),
    }
  },
};
</script>
