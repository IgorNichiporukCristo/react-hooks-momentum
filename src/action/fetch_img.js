import {ADD_IMAGE_RANDOM} from '../constans';

export const getImg = (dispatch) => {
  fetch('https://api.unsplash.com/photos/random?orientation=landscape&client_id=DQ0GTJcwBglvT7BrlwcWDD77TuLa9gCsZa2K-WWNTqI')
  .then((res) => res.json())
  .then(({ urls : {raw} }) => {
    dispatch({ 
      type: ADD_IMAGE_RANDOM,
      image: raw
    });
  })
  .catch(error => console.log(error));
}
