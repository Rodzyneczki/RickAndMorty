import { CharacterType } from "../types/Character";

export const FavReducer = (
  state: CharacterType[],
  action: { type: string; payload: CharacterType }
) => {
  switch (action.type) {
    case "ADD_FAV":
      return [
        ...state,
        {
          id: action.payload.id,
          created: action.payload.created,
          episode: action.payload.episode,
          gender: action.payload.gender,
          name: action.payload.name,
          url: action.payload.url,
        },
      ];
    case "REMOVE_FAV":
      return state.filter(
        (character: CharacterType) => character.name !== action.payload.name
      );
    default:
      return state;
  }
};
