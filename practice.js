async function getQuote() {
  try {
    let res = await fetch("https://api.api-ninjas.com/v1/quotes");
    let data = await res.json();
    console.log(data.quote);
    console.log(data.author);
  } catch (e) {
    console.log("Error a gya bhai", e);
  }
}
getQuote();
