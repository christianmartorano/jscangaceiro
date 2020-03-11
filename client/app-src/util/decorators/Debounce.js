export function debounce (milisegundos = 500){
    
    return function(target, key, descriptor) {
        
        const metodoOriginal = descriptor.value;      

        let timer = 0;
        descriptor.value = function(...args){

            if(event) event.preventDefault();

            clearInterval(timer);
            timer = setTimeout(() => {
                console.log(`Executou o debounce em ${milisegundos}`);
                metodoOriginal.apply(this, args)}
                , milisegundos);
        }

        return descriptor;
    }
}