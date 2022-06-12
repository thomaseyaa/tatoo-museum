import MyIcon from './Icon.vue';

export default {
  title: 'Tokens/Icons',
  component: MyIcon,
};

const Template = (args) => ({
  components: { MyIcon },
  setup() {
    return { args };
  },
  template: '<my-icon v-bind="args" />',
});

export const Close = Template.bind({});
Close.args = {
  close: true,
};

export const Facebook = Template.bind({});
Facebook.args = {
  facebook: true,
};

export const Instagram = Template.bind({});
Instagram.args = {
  instagram: true,
};

export const Linkedin = Template.bind({});
Linkedin.args = {
  linkedin: true,
};

export const Message = Template.bind({});
Message.args = {
  message: true,
};

export const Palette = Template.bind({});
Palette.args = {
  palette: true,
};

export const Search = Template.bind({});
Search.args = {
  search: true,
};

export const Snapchat = Template.bind({});
Snapchat.args = {
  snapchat: true,
};

export const Tel = Template.bind({});
Tel.args = {
  tel: true,
};

export const Twitter = Template.bind({});
Twitter.args = {
  twitter: true,
};

export const User = Template.bind({});
User.args = {
  user: true,
};
