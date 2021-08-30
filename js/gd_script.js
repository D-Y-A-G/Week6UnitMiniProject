// built HTML layout for home page and search results HTML
// input text field to get what use wants to search for
// Need to know what URL looks like for Library of Congress
// find API documentation for LoC
// event listener on button perform search
// response function

var requestUrl = "https://www.loc.gov/search/?q=maps&fo=json";

var responseText = document.getElementById("response-text");

function getApi(requestUrl) {
  fetch(requestUrl).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

getApi(requestUrl);

var tableBody = document.getElementById("repo-table");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = "https://www.loc.gov/search/?q=maps&fo=json";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var listItem = document.createElement("li");
        var link = document.createElement("a");

        // Setting the text of link and the href of the link
        listItem.textContent = data[i].html_url;
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener("click", getApi);
