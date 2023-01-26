import produceData from '../mockData/produce.json'

const POPULATE = 'POPULATE';


export const populateProduce = () => {
  return {
    type: POPULATE, 
    produce: produceData
  }
};


export default function produceReducer(state = {}, action) {
  Object.freeze(state);
  const newState = {...state};
  // const listOfProduce = Object.values(action);
  switch (action.type) {
    case POPULATE:
      // assuming the payload is an array
          action.produce.forEach(produce => {
            newState[produce.id] = produce;
          });
      // assuming the payload is an object
        // Object.values(action).forEach(produce => {
        //   newState[produce.id] = produce;
        // });
      return newState;
    default:
      return state;
  }
}

