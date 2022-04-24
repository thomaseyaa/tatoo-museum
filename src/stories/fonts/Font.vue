<template>
  <h1 :class="classes">{{ label }}</h1>
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
    text1: {
      type: Boolean,
      default: false,
    },
    text2: {
      type: Boolean,
      default: false,
    },
    text3: {
      type: Boolean,
      default: false,
    },
    text4: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-font--text1': props.text1,
        'storybook-font--text2': props.text2,
        'storybook-font--text3': props.text3,
        'storybook-font--text4': props.text4,
      })),
    }
  },
};
</script>
