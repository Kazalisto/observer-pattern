function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    suscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now suscribed to ${fn.name}`)
    },
    unsuscribe: function(fn){
        /*Filtering out from the list whatever matches the callback function.If there's no match,
        the callback gets to stay on the list. The filter returns a new list and reassigns
        the list of observers.
        */
        this.observers = this.observers.filter(function(item){
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsuscribed from ${fn.name}`)
  }, 

    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        })
    }
}

const click = new EventObserver();

//Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.suscribe(getCurrentMillisecond);
})

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsuscribe(getCurrentMillisecond);
})

document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
})
//Click Handler
const getCurrentMillisecond = function(){
    console.log(`Current Millisecond: ${new Date().getMilliseconds()}`)
}