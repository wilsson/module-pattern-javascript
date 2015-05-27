var tabs = (function() {
  var st = {
    tabs: '.tabs',
    tabs_item: '.tabs_item',
    tabs_item_target: '.tabs_item_target'
  };

  var dom = {}

  var catchDom = function() {
    dom.tabs_item_target = $(st.tabs_item_target, st.tabs);
  };

  var suscribeEvents = function() {
    dom.tabs_item_target.on('click', events.eSelectedTab);
  };

  var events = {
    eSelectedTab: function(e) {
      self = $(this);
      self.addClass('is_selected');
      var brother = self.parent(st.tabs_item).siblings();
      $(st.tabs_item_target, brother).removeClass('is_selected');
      var pane = self.attr('data-tab');
      $("#" + pane).addClass('is_active');
      $("#" + pane).siblings().removeClass('is_active');
    }
  };

  var initialize = function() {
    catchDom();
    suscribeEvents();
  };

  return {
    init: initialize
  }
})();

tabs.init();
