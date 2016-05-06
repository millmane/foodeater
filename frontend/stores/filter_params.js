var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var _params = {};
var FilterConstants = require('../constants/filter_constants');

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function () {
  return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = function (payload) {

  switch(payload.actionType){

    case FilterConstants.UPDATE_MAX_PRICE:
      _params.maxPrice = payload.maxPrice;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_MIN_PRICE:
      _params.minPrice = payload.minPrice;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
