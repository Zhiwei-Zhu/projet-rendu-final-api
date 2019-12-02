document.addEventListener('DOMContentLoaded',function () {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
    document.getElementById("but").addEventListener('click',function () {
        let input = 'ditto'
        let url = apiURL+input
        fetch(url).then(function (resp) {return resp.json()}).then(function (data) {
            

        })

    });

});