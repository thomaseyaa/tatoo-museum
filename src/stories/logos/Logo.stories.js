import MyLogo from './Logo.vue';

export default {
  title: 'Example/Logos',
  component: MyLogo,
};

const Template = (args) => ({
  components: { MyLogo },
  setup() {
    return { args };
  },
  template: '<my-logo v-bind="args" />',
});

export const Logo = Template.bind({});
Logo.args = {
  primary: true,
  src: 'https://lh6.googleusercontent.com/RwxjRZhOROV-DW5FEtAsYqFDqM2xMjm8zJLXjr_u-UH4HnqK_2dV4MAsg6dHLhv-jTTBKsh-T5EeCe4JUm5_=w1640-h1578'
};
