const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            message: 'Benvenuto, ',
            nome: "mario",
            cognome: "rossi",
            classiTitolo: "red"
        }
    },
    methods: {
        bottoneCliccato: function () {
            this.classiTitolo = "aqua";
        }
    }
};

createApp(opzioni).mount('#app')