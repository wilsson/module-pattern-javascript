var auto = function(){
    dom = {}
    /* definiendo propiedades */
    st = {
        color           : "blue"
        numeroDeLlantas : 4
        placa           : 58471
    }

    var suscribeEvents = function(){}
        dom.avanzar.on("click",events.eAvanzar);
        dom.retroceder.on("click",events.eRetroceder);
    };

    events = {
        eAvanzar : function(){},
        eRetroceder : function(){}
    }


    var initialize = function(){
        suscribeEvents();
    };

    return{
        init : initialize
    }
};
