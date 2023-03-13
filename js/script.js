// VueJS
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      title: "Il mio primo titolo",
      imgSource: "img/spiderman.jpg",
    };
  },
}).mount("#app");
