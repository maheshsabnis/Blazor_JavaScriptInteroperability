function getData() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            // states is OK
            if (xhr.status === 200) {
                // successful execution
                console.log('Reponse received ' + xhr.response);
                resolve(xhr.response);
            }
        };
        xhr.onerror = function () {
            reject('Error Occured ' + xhr.responseText);
        };
        xhr.open('GET', "https://apiapptrainingnewapp.azurewebsites.net/api/Products");
        xhr.send();
    });
}