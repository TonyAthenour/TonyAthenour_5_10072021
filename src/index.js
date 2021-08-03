import retrieveContent from './query.js';

async function showContent() {
  try {
    const content = await retrieveContent();
    console.log(content);
    document.getElementById("card1-name").innerHTML = content[0].name;
    document.getElementById("card1-text").innerHTML = content[0].description;
    document.getElementById("card1-img").setAttribute("src", content[0].imageUrl);

  } catch (e) {
    console.log('Error', e);
  }
}

showContent();