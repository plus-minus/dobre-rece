export const INCREMENT_STEP = "[form] Increment step"
export const DECREMENT_STEP = "[form] Decrement step"
export const  START_FETCHING = "[foundations] Start fetching";
export const LOAD_FOUNDATIONS = "[foundations] Loading foundation data";


export const incrementStep = () => {
  return {
    type: INCREMENT_STEP
  }
}


export const decrementStep = () => {
  return {
    type: DECREMENT_STEP
  }
}


export const startFetching = () => {
  return { type: START_FETCHING, loading: true}
}


export const loadFundations = (data) => {
  return { type: LOAD_FOUNDATIONS, data}
}



export const getData = () => dispatch => {
  //dispatch(startFetching())

  fetch("http://localhost:3000/foundations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(json => {
      dispatch(loadFundations(json))
    })
    .catch(err => console.error(err))
}