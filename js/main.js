const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            currentImg: 0,
            intervallo: null,
            immagini: [
                {
                    immagine: 'https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg',
                    titolo: 'Un lago',
                    descrizione: 'I laghi sono grandi tazze di pietra piene d\'acqua'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg',
                    titolo: 'Tramonto sulla spiaggia',
                    descrizione: 'Un meraviglioso tramonto con colori caldi che si riflettono sull\'acqua.'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg',
                    titolo: 'Montagne innevate',
                    descrizione: 'Un panorama mozzafiato delle montagne coperte di neve.'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg',
                    titolo: 'Campi verdi',
                    descrizione: 'Vaste distese di campi verdi che si estendono all\'orizzonte.'
                },
                {
                    immagine: 'https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg',
                    titolo: 'Sottobosco',
                    descrizione: 'Il sottobosco si trova sotto il bosco.'
                }
            ]
        }
    },
    methods: {
        getThumbClass(n) {
            return (n==this.currentImg) ? "thumb thumbActive" : "thumb";
        },
        slideBack() {
            let indiceUltimaImg = this.immagini.length-1;

            if(this.currentImg > 0) {
                this.currentImg--;
            } else {
                this.currentImg = indiceUltimaImg;
            }
        },
        slideNext() {
            let indiceUltimaImg = this.immagini.length-1;

            if(this.currentImg < indiceUltimaImg) {
                this.currentImg++;
            } else {
                this.currentImg = 0;
            }
        },
        slideSet(n) {
            this.currentImg = n;
        },
        autoPlay() {
            if( !this.intervallo ) {
                this.intervallo = setInterval(()=>{
                    this.slideNext();
                }, 1000);
            } else {
                clearInterval( this.intervallo );
                this.intervallo = null;
            }
        }
    },
    mounted() {
        console.log(`Pagina caricata`);
        this.autoPlay();
    },
};

createApp(opzioni).mount('#app')