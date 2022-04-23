import MyIcon from './Icon.vue';

export default {
  title: 'Example/Icons',
  component: MyIcon,
};

const Template = (args) => ({
  components: { MyIcon },
  setup() {
    return { args };
  },
  template: '<my-illustration v-bind="args" />',
});

export const Search = Template.bind({});
Search.args = {
  primary: true,
  src: ''
};

export const Tel = Template.bind({});
Tel.args = {
  src: ''
};

export const User = Template.bind({});
User.args = {
  src: ''
};

export const Instagram = Template.bind({});
Instagram.args = {
  src: ''
};

export const Snapchat = Template.bind({});
Snapchat.args = {
  src: ''
};


export const Facebook = Template.bind({});
Facebook.args = {
  src: ''
};

export const Twitter = Template.bind({});
Twitter.args = {
  src: ''
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  src: ''
};

export const Palette = Template.bind({});
Palette.args = {
  src: ''
};
