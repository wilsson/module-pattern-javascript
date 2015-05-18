var calculadora = (function(){
    var st = {
        valores     : '#valores',
        numValidos  : '0123456789',
        numero      : '.numero',
        eliminar    : '#eliminar',
        eliminarTodo: '#eliminarTodo' 
    };
    var dom = {};
    
    var catchDom = function(){
        dom.eliminarTodo = $(st.eliminarTodo);
        dom.eliminar     = $(st.eliminar);
        dom.valores      = $(st.valores);
        dom.numero       = $(st.numero);
    };
    
    var suscribeEvents = function(){
        dom.valores.on("keypress",events.eIngresoDeNumero);  
        dom.numero.on("click",events.eClickNumero);
        dom.eliminar.on("click",events.eEliminar);
        dom.eliminarTodo.on("click",events.eEliminarTodo);
    };
    
    var events = {
        eIngresoDeNumero : function(e){
            var key = e.keycode || e.which;
            var teclado = String.fromCharCode(key);
            if(st.numValidos.indexOf(teclado)==-1){
                return false;
            }
        },
        eClickNumero : function(e){
            dom.valores.val(dom.valores.val()+$(e.currentTarget).val())
        },
        eEliminar : function(e){
            var anterior = dom.valores.val();
            var nuevo    = anterior.substring(0,anterior.length-1)
            dom.valores.val(nuevo);
        }
    };
    var initialize = function(){
        console.log("entrando");
        catchDom();
        suscribeEvents();
    };
    
    return{
        init:initialize
    }
})();

calculadora .init();
