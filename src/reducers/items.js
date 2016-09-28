import Constants from '../constants/app-constants';

let data = [
  {
    id: 1,
    name: 'a',
    price: 1
  },
  {
    id: 2,
    name: 'b',
    price: 2
  },
  {
    id: 3,
    name: 'c',
    price: 3
  }
];

const items = (state = data, action) => {
    switch (action.type) {
        case Constants.ADD_ITEM:
            let item = action.item;
            return [...state, {
                id: item.id,
                name: item.name,
                price: item.price
            }];
        case Constants.REMOVE_ITEM:
            let index = state.map(function(item) { return item.id; }).indexOf(action.id);
            state.splice(index, 1);
            return [...state];
        default:
            return state;
    }
}

export default items;
