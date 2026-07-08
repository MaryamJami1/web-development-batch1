let api = fetch("https://jsonplaceholder.typicode.com/users")

api.then(response => response.json()).then(data =>{console.log(data)})
