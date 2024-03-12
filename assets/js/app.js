console.log('it works!');

const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Vue Hello',
            image: './assets/img/dragonball.jpeg',
        }
    }
}).mount('#app');

