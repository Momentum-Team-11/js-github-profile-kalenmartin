
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

root.innerHTML = `
<p class="name">Name: ${data.name}</p>
<p class="username"> Username: ${data.login}</p>
<p class="location">Location: ${data.location}</p>
<img src=${data.avatar_url}/>
<p class ="website">Website: ${data.blog}</p>
<p class="followers">Followers: ${data.followers}</p>
<p class="following">Following: ${data.following}</p>
    <p class="GitHub Repos">GitHub Repos</p>
<a href="helloWorld">${data.repos_url}/ 
    <br>
<a href="patchwork">${data.repos_url}/`

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

