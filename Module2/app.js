Vue.createApp({
    // data() {
    //     return {
    //
    //     }
    // }
    // ES6
    data: () => ({
        myHtml: "<h1>Vue 3 App</h1>",
        title: "Я есть Грут",
        person: {
            name: "Yaroslav",
            lastName: "Kovalev",
            age: 41
        },
        items: [1, 2],
    }),
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value);
            this.$refs.myInput.value = "";
            console.log(event.key);
        },
        remove(i) {
            this.items.splice(i, 1);
        },
        log(item) {
            console.log(item);
        }

    }
}).mount("#app")