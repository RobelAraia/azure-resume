# azure-resume
My Azure Resume

## First Steps
- Frontend folder contains the website.
- main.js contains visitor counter code.

```js
window.addEventListener('DOMcontentLoaded', (event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}