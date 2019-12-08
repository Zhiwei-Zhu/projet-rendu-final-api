document.addEventListener('DOMContentLoaded',function () {
    //POKEMON API
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
        document.getElementById("buttonpoke").addEventListener("click", function(){
            let input = document.getElementById('recherchepoke').value.toLowerCase();
            if (input.length == 0){
                alert("couldn't find the pokemon")
            } else {
                let url = apiURL + input;
                fetch(url).then(function (resp) {return resp.json()}).then(function (data) {
                    let name = document.getElementById('name');
                    name.innerText = data.species.name;
                    //TYPE
                    const typelg = data.types.length
                    for (let i = 0; i < typelg; i++) {
                        let type = data.types[i].type.name
                        document.getElementById('type').innerText = "Type";
                        let types = document.querySelector('.types')
                        types.innerHTML += '<div class="col-sm-3 text-center"><div class="item-types ' + type + '">' + type + '</div></div>'
                    }
                    //IMAGE
                    let types = document.querySelector('.images')
                    types.innerHTML += '<div class="row"><img src="' + data.sprites.front_default + '" width="200px" height="200px">' +
                        '<img src="' + data.sprites.back_default + '" width="200px" height="200px"></div>' +
                        '<img src="' + data.sprites.front_shiny + '" width="200px" height="200px"></div>' +
                        '<img src="' + data.sprites.back_shiny + '" width="200px" height="200px"></div>'
                    //ABILITY
                    let ablenght = data.abilities.length
                    if(ablenght !==0){
                        for (let j = 0; j < ablenght; j++) {
                            let ability = data.abilities[j].ability
                            document.getElementById('ability').innerText = "Ability";
                            let abilities = document.querySelector('.abilities')
                            fetch(ability.url).then(function (resp) {
                                return resp.json()
                            }).then(function (data2) {
                                abilities.innerHTML += '<div class="col-sm-12"><div class="item-abilities"><b>' + ability.name + ':</b></div>' +
                                    '<div class="abdesc">' + data2.effect_entries[0].effect + '</div></div>'
                            })
                        }
                    }else {
                        document.getElementById('ability').innerText = "Ability";
                        let abilities = document.querySelector('.abilities').innerHTML = "<div class='col-sm-12'>didn't found anything</div>"
                    }

                    //ITEM
                    let itemlg = data.held_items.length
                    if(itemlg !==0) {
                        for (let g = 0; g < itemlg; g++) {
                            let item = data.held_items[g].item
                            document.getElementById('item').innerText = "Items they can have";
                            let items = document.querySelector('.items')
                            fetch(item.url).then(function (resp) {
                                return resp.json()
                            }).then(function (data2) {
                                items.innerHTML += '<div class="col-sm-12"><div class="items"><b>' + item.name + ':</b></div>' +
                                    '<div class="abdesc">' + data2.effect_entries[0].effect + '</div></div>'
                            })
                        }
                    }else {
                        document.getElementById('item').innerText = "Items they can have";
                        let items = document.querySelector('.items').innerHTML = "<div class='col-sm-12'>didn't found anything</div>"
                    }
                    //MOVE

                    let movelenght = data.moves.length
                    if(ablenght !==0){
                    for (let h = 0; h < movelenght; h++) {
                        let move = data.moves[h].move
                        document.getElementById('move').innerText = "Move";
                        let moves = document.querySelector('.moves')
                        fetch(move.url).then(function (resp) {return resp.json()}).then(function (data3) {
                            moves.innerHTML += '<div class="col-sm-12"><div class="item-moves"><b>' + move.name + ':</b></div>' +
                                '<div class="movedesc">' + data3.effect_entries[0].effect + '</div></div>'
                        })
                    }
                    }else {
                        document.getElementById('move').innerText = "Move";
                        let moves = document.querySelector('.moves').innerHTML = "<div class='col-sm-12'>didn't found anything</div>"
                    }


                })
            }

    });
});