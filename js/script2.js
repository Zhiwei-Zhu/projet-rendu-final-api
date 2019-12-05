const MHWURL = 'https://mhw-db.com/monsters';
fetch(MHWURL).then(function (resp) {return resp.json()}).then(function (data) {
    console.log(data)
    document.getElementById("buttonmhw").addEventListener("click", function() {
        let input = document.getElementById('recherchemhw').value;
        if (input.length == 0) {
            alert("couldn't find the monster")
        } else {
            let url = MHWURL + input;
            fetch(url).then(function (resp) {return resp.json()}).then(function (sdata) {
                console.log(sdata);
            })
        }
    })
})