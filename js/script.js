
function getAPIData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            const data = JSON.parse(xhr.responseText);

            }

        }
    }
    xhr.open('GET', 'https://api-ratp.pierre-grimaud.fr/v4/traffic');
    xhr.send()
}




getAPIData()