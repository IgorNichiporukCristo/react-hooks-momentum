fetch('https://api.unsplash.com/photos/?client_id=DQ0GTJcwBglvT7BrlwcWDD77TuLa9gCsZa2K-WWNTqI')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });