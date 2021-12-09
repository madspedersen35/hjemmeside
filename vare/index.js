let form = document.getElementById('submitForm');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const formData=  new FormData(form);

    await fetch('http://localhost:5555/vare', {

        method: "POST",

        body: formData
    });
});

let refresh =document.getElementById('refresh');

refresh.addEventListener('click',async () => {

    VareListe.innerHTML =`
    <tr>

        <th> Titel</th>

        <th> Pris</th>

        <th> kategori</th>
        
        <th> Billede</th>

    </tr>

    `;
    await fetch ('http://localhost:5555/alle_vare',{
        method: "GET"
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);

        res.forEach((e) => {
            VareListe.innerHTML+=`
            <tr>
            <td>${e.titel}</td>
            <td>${e.pris}</td>
            <td>${e.kategori}</td>
            <td><img src="${e.thumbnail}" style="height:50px;width;50px"/></td>
            
            
            </tr>
            
            `;
            
        });
    }) 
});