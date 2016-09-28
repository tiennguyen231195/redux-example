import Constants from '../constants/app-constants';

export const addItem = (item) => {
  return {
    type: Constants.ADD_ITEM,
    item: item
  }
}

export const removeItem = (id) => {
  return {
    type: Constants.REMOVE_ITEM,
    id: id
  }
}
