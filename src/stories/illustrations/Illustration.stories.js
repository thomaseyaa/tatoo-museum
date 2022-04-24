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
  src: './assets/illustration1.png'
};

export const Illustration2 = Template.bind({});
Illustration2.args = {
  src: 'https://lh6.googleusercontent.com/Ir_J1nILEz_ytkbueiJBMXUUX1xD5BUTWTCLDXeAGDlQE52Ks5r1Unvh9Ltok-TuUzZ_48gmksm_PdkwA0Hm=w1640-h1578'
};
