import MyLogo from './Logo.vue';

export default {
  title: 'Tokens/Logos',
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
  src: 'https://res.cloudinary.com/dh41ye6kv/image/upload/v1650888094/logo_jccmjc.png'
};
