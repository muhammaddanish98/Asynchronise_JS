let maindiv = document.getElementById('main')

let FetchData = async() => {
    try {
    let res = await fetch("https://dummyjson.com/Users")
    res = await res.json()
    let {users} = res
    console.log(users);
    users.map((user)=> {
        let {firstName , lastName , image , age , university} = user
        let div = document.createElement("div")
        div.className = ("child_div")
        div.innerHTML = `<img src = ${image}/>
        <h1>${firstName}  ${lastName} <span>${age}</span></h1> <h2>${university}</h2> <br>`
        maindiv.appendChild(div)
    })
}
    catch (err) {
        console.error(err)
    }
}
FetchData()
console.log('Hello World');