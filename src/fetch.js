fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
        'X-API-KEY': '8efd20fe-46fe-4c61-941e-2f1ce4bdbadb',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))