import { ADD_IMAGE_RANDOM } from "../constans";
const initialState = {
image: []
};
const addImage = (state = initialState, action) =>{
  switch (action.type){
    case ADD_IMAGE_RANDOM:
      return {
        ...state,
       image:  state.image.concat(action.image)
      }
    default:
      return state;
  }
  
}
export default addImage;