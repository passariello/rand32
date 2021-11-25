  const rand32 = (total) => {
    const t0 = performance.now()
    var array = []
    array['nums'] = []
    array['time'] = []  
    
    for(var i=0; i < total; ++i){ 
       array.nums.push( window.crypto.getRandomValues(new Uint32Array(1))[0] )
    }
    
    const t1 = performance.now()
    array.time.push(t1 - t0)    
    
    return array
  }
  
  console.log( rand32(500000) )