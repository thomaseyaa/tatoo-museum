import MyIllustration from './Illustration.vue';

export default {
  title: 'Example/Illustrations',
  component: MyIllustration,
};

const Template = (args) => ({
  components: { MyIllustration },
  setup() {
    return { args };
  },
  template: '<my-illustration v-bind="args" />',
});

export const Illustration1 = Template.bind({});
Illustration1.args = {
  src: 'https://res.cloudinary.com/dh41ye6kv/image/upload/v1650888094/illustration1_k4fqrh.png'
};

export const Illustration2 = Template.bind({});
Illustration2.args = {
  src: 'https://res.cloudinary.com/dh41ye6kv/image/upload/v1650888094/illustration2_z1wekd.png'
};
