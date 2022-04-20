const app = Vue.createApp({
    data() {
        return {
        output: '',
        outputEnter: ''
        };
    },
    methods: {
        showAlert() {
            alert("You've clicked this!")
        },
        setOutPut(event) {
            this.output = event.target.value;
        },
        setOutPutEnter(event) {
            this.outputEnter = event.target.value;
        }
    }
});

app.mount('#assignment');