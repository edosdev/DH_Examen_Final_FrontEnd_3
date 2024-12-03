export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MEDICS":
      return { ...state, data: action.payload }
    case "CHANGE_THEME":
      const nuevoTema = state.theme === "light" ? "dark" : "light"
      return { ...state, theme: nuevoTema }

    default:
      return state;
  }
}
