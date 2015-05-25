var tabs = (function(){
    // Objeto la cual establecemos valores que vamos a usar mas adelante en este ámbito
    var st = {
        tabs             : '.tabs',
        tabs_item        : '.tabs_item',
        tabs_item_target : '.tabs_item_target'
    };
    // Objeto vacío que guardará elementos que se manejan por HTML
    var dom = {}
    
    //Función que llenará al objeto dom con los objetos HTML a través de jQuery ($)
    var catchDom = function(){
        dom.tabs_item_target = $(st.tabs_item_target,st.tabs);
    };
 
    //Función donde establecemos los eventos que tendrán cada elemento
    var suscribeEvents = function(){
        dom.tabs_item_target.on('click',events.eSelectedTab);
    };

    //Objeto que guarda métodos que se van a usar en cada evento definido en la función suscribeEvents
    var events = {
        eSelectedTab : function(){
            _this = $(this);
            _this.addClass('is_selected');
            var brother = _this.parent(st.tabs_item).siblings();
            $(st.tabs_item_target,brother).removeClass('is_selected');
            var pane = _this.attr('data-tab');
            $("#"+pane).addClass('is_active');
            $("#"+pane).siblings().removeClass('is_active');
        }
    };

    //Función que inicializará los funciones decritas anteriormente
    var initialize = function(){
        catchDom();
        suscribeEvents();
    };

    //Retorna un objeto literal con el método init haciendo referencia a la función initialize.
    return{
        init:initialize
    }
})();

//Ejecutando el método "init" del módulo tabs.
tabs.init();
