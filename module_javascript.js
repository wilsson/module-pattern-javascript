var module = function(){

    var privateMethod = function(){
        console.log("soy un metodo privado")
    };

    return {
         publicMethod : function(){
            /* invocando un metodo privado*/
             privateMethod();
         }
    };
};

module().publicMethod();
