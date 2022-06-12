import MyImage from './Image.vue';

export default {
  title: 'Tokens/Images',
  component: MyImage,
};

const Template = (args) => ({
  components: { MyImage },
  setup() {
    return { args };
  },
  template: '<my-image v-bind="args" />',
});

export const Image1 = Template.bind({});
Image1.args = {
  src: 'https://res.cloudinary.com/dh41ye6kv/image/upload/v1650888094/photo1_vo0sfu.png'
};

export const Image2 = Template.bind({});
Image2.args = {
  src: 'https://res.cloudinary.com/dh41ye6kv/image/upload/v1650888094/photo2_qjcmrl.png'
};

export const Image3 = Template.bind({});
Image3.args = {
  src: 'https://res.cloudinary.com/dh41ye6kv/image/upload/v1650888094/photo3_cek7uj.png'
};

export const Image4 = Template.bind({});
Image4.args = {
  src: ''
};

export const Image5 = Template.bind({});
Image5.args = {
  src: 'https://res.cloudinary.com/dh41ye6kv/image/upload/v1650888094/photo5_nvnrvi.png'
};
