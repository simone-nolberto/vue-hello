console.log('it works!');

const {createApp} = Vue 

    createApp({
        data(){
            return{
                message: 'Vue Hello',
                image: 'dragonball.jpeg'
            }
        }
    }).mount('#app');
        
    