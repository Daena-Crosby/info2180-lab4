document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const searchField = document.getElementById("search");
  const resultDiv = document.getElementById("result");

  btn.addEventListener("click", () => {
    const query = searchField.value.trim();
    let url = "superheroes.php";

    if (query !== "") {
      url += "?query=" + encodeURIComponent(query);
    }

    fetch(url)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        resultDiv.innerHTML = "<p>Error fetching data.</p>";
        console.error(error);
      });
  });
});
