// import actions
import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

export const initialState = {
  additionalPrice: 250,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [{ id: 4, name: "Rear spoiler", price: 250 }]
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 }
  ]
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalFeatures: state.additionalFeatures.filter(
          item => item.id !== action.payload.id
        )
      };
    case REMOVE_FEATURE:
      return {
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(item => item.id !== action.payload.id)
        },
        additionalFeatures: [...state.additionalFeatures, action.payload]
      };
    default:
      return state;
  }
}
