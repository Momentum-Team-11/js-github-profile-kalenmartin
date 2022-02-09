
fetch('https://api.github.com/users/kalenmartin')
    .then((response) => response.json())
    .then((data) => {
        const root = document.getElementById('root');
//        console.log(root);
//        console.log(root.innerHTML)
//        root.innerHtml = `<p>${data.login}</p>`

let username = document.createElement('h3')
username.innerText = data.login
root.appendChild(username)

let name = document.createElement('h3')
name.innerText = data.name
root.appendChild(name)

root.innerHTML = `
<p class="name">${data.name}</p>
<p class="username">${data.login}</p>
<p class="location">${data.location}</p>
<img src=${data.avatar_url}/>
<a href="helloWorld">${data.repos_url}/> <br>
<a href="patchwork">${data.repos_url}/>`
    })


fetch("https://api.github.com/repos/kalenmartin/hello-world")
    .then((response) => response.json())
    .then((data) => {
    const repos = document.getElementById('repos');
        console.log(repos)

    })






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

