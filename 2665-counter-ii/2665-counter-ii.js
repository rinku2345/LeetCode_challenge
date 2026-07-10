/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) 
{
      let currentnum=init
      return{
        increment:()=>
        {
            return ++currentnum
        },
        decrement:()=>
        {
            return --currentnum
        },
        reset:()=>
        {
            currentnum=init
            return currentnum
        }
      }


};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */