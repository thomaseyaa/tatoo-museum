import MyFont from './Font.vue';
import './font.css';

export default {
  title: 'Tokens/Typographie',
  component: MyFont,
};

const Template = (args) => ({
  components: { MyFont },
  setup() {
    return { args };
  },
  template: '<my-font v-bind="args" />',
});

export const Text1 = Template.bind({});
Text1.args = {
  label: 'AUGUST',
  text1: true,
};

export const Text2 = Template.bind({});
Text2.args = {
  label: "Raleway",
  text2: true,
};

export const Text3 = Template.bind({});
Text3.args = {
  label: "Bebas Neue",
  text3: true,
};

export const Text4 = Template.bind({});
Text4.args = {
  label: "Bebas Neue",
  text4: true,
};
