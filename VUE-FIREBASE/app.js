const app = Vue.createApp({
  // data, functions to react to event
  //template: "<h2>I am the template</h2>",
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: "35",
    };
  },
  methods: {
    changeTitle() {
      // console.log("You clicked me");
      this.title = "Words of Radiance";
    },
  },
});

app.mount("#app");

// Click events
