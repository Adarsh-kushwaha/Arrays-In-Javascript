
// let fetchData = fetch("https://randomuser.me/api").then((response) => {
//     console.log(response.json())
// }).catch((err) => {
//     console.log(err)
// })

async function fetchText() {
    let response = await fetch('https://randomuser.me/api');
    let data = await response.text();
    console.log(data);

    document.createElement(data.title)
}

fetchText()



