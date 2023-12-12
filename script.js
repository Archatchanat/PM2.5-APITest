// const dataContainer = document.getElementById("data-container");

// fetch("https://www.cmuccdc.org/api/ccdc/stations")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(post => {
//             console.log(post);
//             const postElement = document.createElement("p");

//             postElement.textContent = `
//                 จุดตรวจวัด: ${post.dustboy_name_th}, ปริมาณที่วัดได้: ${post.dustboy_pv}
//             `;
//             dataContainer.appendChild(postElement);
            
//         });
//     })
//     .catch(error => {
//         console.log("Error fetching data", error);
//     })

async function loadData (){
    const url = 'https://www.cmuccdc.org/api/ccdc/stations';
    const response = await fetch(url);
    const data = await response.json();
    let userInfo = document.querySelector(".tbody");

    data.forEach(element => {
        const {dustboy_name_th, dustboy_pv} = element;
        let newRow = `
        <tr>
        <td> 
        </td>
        <td>${dustboy_name_th}</td>
        <td>${dustboy_pv}</td>
        </tr>
        `
        userInfo.innerHTML += newRow
    });

}
loadData()