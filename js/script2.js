document.addEventListener('DOMContentLoaded',function () {
    const MHWURL = 'https://mhw-db.com/monsters';
    fetch(MHWURL).then(function (resp) {
        return resp.json()
    }).then(function (datas) {
        document.getElementById("buttonmhw").addEventListener("click", function () {
            let input = document.getElementById('recherchemhw').value.toLowerCase();
            if (input.length == 0) {
                alert("couldn't find the monster")
            } else {
                let id =getid(input,datas)
                let url = MHWURL +'/'+id;
                fetch(url).then(function (resp) {return resp.json()}).then(function (data) {
                    console.log(data);
                    //NAME
                    let name = document.getElementById('name');
                    name.innerText = data.name;
                    //CARD
                    document.getElementById('card').innerText = "Information";
                    let cards = document.querySelector('.cards')
                    cards.innerHTML +="<div class='col-sm-12'>species:"+data.species+"</div>"+
                    "<div class='col-sm-12'>type:"+data.type+"</div>"
                    let loclg=data.locations.length
                    if(loclg==0){
                        let locs = document.querySelector('.locs')
                        locs.innerHTML += "<div class='col-sm-12'>This monster doesn't have any locations</div>"
                    }else {
                        for(let j=0; j<loclg;j++){
                            document.getElementById('loc').innerText = "Location:";
                            let locs = document.querySelector('.locs')
                            locs.innerHTML += "<div class='col-sm-12'>"+data.locations[j].name+"</div>"
                        }
                    }

                    //DESCRIPTION
                    document.getElementById('description').innerText = "Description";
                    let descriptions = document.querySelector('.descriptions')
                    descriptions.innerHTML +="<div class='col-sm-12'>"+data.description+"</div>"


                    //WEAKNESS
                    const weaklg = data.weaknesses.length
                    if(weaklg == 0){
                        document.getElementById('weak').innerText = "Weaknesses";
                        let weaks = document.querySelector('.weaks')
                        weaks.innerHTML +="<div class='col-sm-12'>This monster doesn't have any weaknesses</div>"
                    }else {
                        for (let i = 0; i < weaklg; i++) {
                            document.getElementById('weak').innerText = "Weakness";
                            let weaks = document.querySelector('.weaks')
                            weaks.innerHTML +="<div class='col-sm-6'>"+data.weaknesses[i].element+"</div>"+
                                "<div class='col-sm-6'>rank: "+data.weaknesses[i].stars+"★</i></div>"
                        }
                    }

                    //RESISTANCE
                    const reslg = data.resistances.length
                    if(reslg == 0){
                        document.getElementById('res').innerText = "Resitances";
                        let ress = document.querySelector('.ress')
                        ress.innerHTML +="<div class='col-sm-12'>This monster doesn't have any resistances</div>"
                    }else {
                        for (let i = 0; i < reslg; i++) {
                            document.getElementById('res').innerText = "Resistances";
                            let ress = document.querySelector('.ress')
                            ress.innerHTML +="<div class='col-sm-12'>"+data.resistances[i].element+"</div>"
                        }
                    }
                    const rewlg = data.rewards.length
                    if(rewlg == 0){
                        document.getElementById('rew').innerText = "Rewards";
                        let ress = document.querySelector('.rews')
                        ress.innerHTML +="<div class='col-sm-12'>This monster doesn't give any rewards</div>"
                    }else {
                        for (let i = 0; i < rewlg; i++) {
                            document.getElementById('rew').innerText = "Rewards";
                            let rews = document.querySelector('.rews')
                            rews.innerHTML +="<div class='col-sm-12'>"+data.rewards[i].item.name+"("+data.rewards[i].item.rarity+"★):</div>"+
                                "<div class='col-sm-12'>"+data.rewards[i].item.description+"</div>"
                        }
                    }



                })
            }
        })
    })
});
function getid(input,data) {
    const datalg=data.length;
    for (let i=0;i<datalg;i++){
        let name = data[i].name.toLowerCase();
        if (name == input){
            return data[i].id;
        }
    }
}