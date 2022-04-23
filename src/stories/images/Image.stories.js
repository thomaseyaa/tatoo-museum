import MyImage from './Image.vue';

export default {
  title: 'Example/Images',
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
  src: 'https://lh5.googleusercontent.com/KoNmoQLiiJ54ENWZ9wFa2jlbrYkDhIqTT8IL-ynjP4J7eQF8CnjDCuLPU2YrA9jdBDBhHAcE7loGjkERCmiW=w2880-h1578'
};

export const Image2 = Template.bind({});
Image2.args = {
  src: 'https://lh5.googleusercontent.com/4fvk0fFelt6m9mOK3Q-1g4XeyQ_fzpososa6nP9Gl2VqWsPgtYJXMrZPzhRZNIACX7Ao_iY94CtFLCTKXSFM=w1640-h1578-rw'
};

export const Image3 = Template.bind({});
Image3.args = {
  src: 'https://lh4.googleusercontent.com/gfaKNjcS_tjr-BoDz5xDLMQkP0cq5jCbL69Ei72S5IYRlNh6C8v3twaKd2bLpdmPH28N3ad1prNC2rMplULB=w1640-h1578-rw'
};

export const Image4 = Template.bind({});
Image4.args = {
  src: ''
};

export const Image5 = Template.bind({});
Image5.args = {
  src: 'https://lh5.googleusercontent.com/s0p14sYbC1t_xjvNa3hGbha2Ou_ZN6sijZKzNVsahDv_GL04i8IlRPeuGMnGz4W8pq1pN9nriR3RCK8XmStj=w1640-h1578'
};
