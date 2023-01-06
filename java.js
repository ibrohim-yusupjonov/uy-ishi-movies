// const promise = new Promise((res, reject) =>{
//     setTimeout(() => {
//         res(10);
//     }, 1000)
// })
// promise

// .then((result) => {
//     console.log(result);
// })
// .catch(e =>{
//     alert(e)
// }
// )

// async function myAsyncFunction(){
//     const responce = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e73977e5")
//     console.log(responce)
// }

// myAsyncFunction()

// fetch("http://www.omdbapi.com/?page=1&apikey=e73977e5&")
//     .then((result) => result.json())
//     .then((res) => console.log(res)) 


async function getMovie() {
    try {
      const result = await fetch("http://www.omdbapi.com/?s=social&page1&i=tt3896198&apikey=e73977e5");
  
      const playload = await result.json();
      return playload
    } catch (error) {
      alert("Error");
    }
  }


  getMovie().then(response => {  
    const movies = response.Search
    movies.forEach((movie) => {
      const card = document.getElementById("template-movie").cloneNode(true).content;
  
      const img = card.querySelector(".card-img-top");
      img.src = movie.Poster;
  
      card.querySelector(".card-title").innerHTML = movie.Title;
      card.querySelector(".card-text").innerText = `Date ${movie.Year}`
  
      document.body.append(card)
    })
  })
