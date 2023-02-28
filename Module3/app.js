const h = Vue.h;

const app = Vue.createApp({
    data() {
        return {
            title: "Это из свойства template",
        }
    },
    methods: {
        changeTitle() {
            this.title = "Заголовок изменен!"
        }
    },
    // template: `
    //     <div class="card center">
    //         <h1>{{ title }}</h1>
    //         <button
    //             class="btn primary"
    //             @click="title = 'Заголовок изменен!'"
    //         >
    //             Изменить заголовок
    //         </button>
    //     </div>
    // `,
    render() {
        return h("div",
            {
                className: "card center"
            }, [
                h("h1", {
                    className: "title title--h1",
                }, this.title),
                h("button", {className: "btn primary", onClick: this.changeTitle},
                    "Изменить заголовок")
            ]
        )
    }
})

app.mount("#app")