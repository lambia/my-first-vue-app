const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            // message: 'Benvenuto, ',
            // nome: "mario",
            // cognome: "rossi",
            // colori: [
            //     "red",
            //     "aqua",
            //     "green",
            //     "violet"
            // ],
            // coloreAttuale: 0,
            // h2Classes: "green",
            // imgPath: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
            // imgVisible: true,
            // numeri: [ 1, 2, 3, 5, 8, 13]
            // maxNumero: 33
            immagini: [
                'https://www.themoviedb.org/t/p/w500/qruRhG6jE5M8lWnW1AGOBxtdmCO.jpg',
                'https://www.themoviedb.org/t/p/w500/vGujlColp9TkLCOgkPr92azJlR8.jpg',
                'https://www.themoviedb.org/t/p/w500/ui9dxJfw9I8dJzil9x5ZeXLsrFF.jpg',
                'https://www.themoviedb.org/t/p/w500/rE1AOt56R4vrvVKpWrQ4wn7DYyg.jpg'
            ],
            slideNumber: 0
        }
    },
    methods: {
        back() {
            let indiceUltimaImg = this.immagini.length-1;

            if(this.slideNumber > 0) {
                this.slideNumber--;
            } else {
                this.slideNumber = indiceUltimaImg;
            }
        },
        next() {
            let indiceUltimaImg = this.immagini.length-1;

            if(this.slideNumber < indiceUltimaImg) {
                this.slideNumber++;
            } else {
                this.slideNumber = 0;
            }
        }
        // getNumero: function() {
        //     return 3*33+2;
        // },
        // getMessage() {
        //     return this.message + this.nome + " " + this.cognome;
        // },
        // cambiaColore: function () {

        //     if( this.coloreAttuale < this.colori.length-1 ) {
        //         this.coloreAttuale++;
        //         this.h2Classes = this.colori[this.coloreAttuale];
        //     } else {
        //         this.coloreAttuale = 0;
        //         this.h2Classes = this.colori[this.coloreAttuale];
        //     }
        // },
        // toggleImmagine() {
        //     this.imgVisible = !this.imgVisible;
        // }
    },
    // MI RACCOMANDO FUORI DAL methods:{} !!!
    mounted() {
        console.log(`Pagina caricata`);
        // this.h2Classes = this.colori[this.coloreAttuale];
    }
};

createApp(opzioni).mount('#app')