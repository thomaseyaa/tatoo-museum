import MyButton from './Button.vue';

export default {
  title: 'Tokens/Boutons',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: true,
  label: 'Button',
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: true,
  label: 'Button',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
};
