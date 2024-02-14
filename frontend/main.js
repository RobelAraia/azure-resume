window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
  });
  
  const functionAPIUrl = 'https://getroberesumecounter.azurewebsites.net/api/GetResumeCounter?code=u-ayWJVnONCc0V6Hal1RouAXFaOvgpFA8PFauJFCQfZVAzFuwJE9dA==';
  const localfunctionAPI = "http://localhost:7071/api/GetResumeCounter";
  
  const getVisitCount = async () => {
    let count = 30;
    await fetch(functionAPIUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
      })
      .catch(function (error) {
        console.log(error);
      });
    return count;
  };