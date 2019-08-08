// Store/Reducers/seenReducer.js

const initialState = { seenFilm: [] }

function toggleSeen(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_SEEN':
      const seenFilmIndex = state.seenFilm.findIndex(item => item.id === action.value.id)
      if (seenFilmIndex !== -1) {
        // Le film est déjà dans les films vus, on le supprime de la liste
        nextState = {
          ...state,
          seenFilm: state.seenFilm.filter( (item, index) => index !== seenFilmIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          seenFilm: [...state.seenFilm, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleSeen
