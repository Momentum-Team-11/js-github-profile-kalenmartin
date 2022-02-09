
fetch('https://api.github.com/users/kalenmartin')
    .then((response) => response.json())
    .then((data) => {
        const root = document.getElementById('root');
//        console.log(root);
//        console.log(root.innerHTML)
//        root.innerHtml = `<p>${data.login}</p>`

const username = document.createElement('h3')
username.innerText = data.login
root.appendChild(username)

// const h3El = document.createElement('h3')
// const h3Text = document.createTextNode("username: ")
// h2El.appendChild(h3Text)
// root.appendChild(h3El)
// console.log(h3El)

let name = document.createElement('h3')
name.innerText = data.name
root.appendChild(name)

let avatar_url = 

root.innerHTML = `
<p class="name">${data.name}</p>
<p class="username">@${data.login}</p>
<p class="location">${data.location}</p>
<img src=${"https://avatars.githubusercontent.com/u/98348889?v=4"} alt="Kalen avatar" class="center"/>
<p class ="website">${"https://www.kalenmartin.com/"}</p>
    <button>kalenmartin.com</button>
<p class="followers">Followers: ${data.followers}</p>
<p class="following">Following: ${data.following}</p>
<p>GitHub Repos</p>

<p class=repos> <a href="helloWorld${data.repos_url}/
    <button>helloWorld</button>
    <br>
<p class=repos> <a href="patchwork"${data.repos_url}/
    <button>patchwork</button>`

    })

    


// fetch("https://api.github.com/repos/kalenmartin/hello-world")
//     .then((response) => response.json())
//     .then((data) => {
//     const repos = document.getElementById('repos');
//         console.log(repos)

//     })






// fetch('https://api.github.com/users/kalenmartin/repos')
    // .then ((response) => response.json())
    // .then ((data) => {
        // const repos = document.getElementById('repos');
        //  console.log(repos);
// //let helloWorld = document.createElement ('h3')
// //console.log(helloWorld)
// //repos.innterText = data.helloWorld
// //repos.appendChild(helloWorld)
// //console.log(helloWorld)

// //repos.innerHTML = `
// //<p> class="hello-world">${data.repos_url.helloWorld}</p>

// // `


// // //gitHubRepos.innerHTML = `

