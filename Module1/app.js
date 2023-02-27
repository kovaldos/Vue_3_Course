const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: "Введите название заметки",
            inputValue: "",
            notes: ["Note1", "Note2", "Note3"]
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue.trim() !== "") {
                this.notes.push(this.inputValue);
                this.inputValue = "";
            }
        },
        setUpperCase(item) {
            return item.toUpperCase();
        },
        removeNote(idx) {
           this.notes.splice(idx, 1)
        },
        // Плохая практика, ибо метод будет вызываться каждый раз при рендере. Необходимо использовать computed
        // doubleCount() {
        //     return this.notes.length * 2;
        // }
    },
    computed: {
        doubleCountComputed() {
            console.log("doubleCountComputed");
            return this.notes.length * 2;
        },
    },
    watch: {
        inputValue(value) {
            if(value.length > 20) {
                alert("Заметка должна быть меньше 20 знаков!")
                this.inputValue = "";
            }
        }
    }
}
Vue.createApp(App).mount("#app")