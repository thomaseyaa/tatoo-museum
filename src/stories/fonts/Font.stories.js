import MyFont from './Font.vue';

export default {
  title: 'Example/Typographie',
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
  primary: true,
  label: 'August',
};

export const Text2 = Template.bind({});
Text2.args = {
  label: "Raleway",
};

export const Text3 = Template.bind({});
Text3.args = {
  label: "Bebas Neue",
};

export const Text4 = Template.bind({});
Text4.args = {
  label: "Bebas Neue",
};
