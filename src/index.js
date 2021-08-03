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

const newElt = document.createElement("div");
let docker = document.getElementById("article");

docker.appendChild(newElt);

let card = {
  img: "url",
  titre: "Ici Norbert",
  texte: "Description",
  prix: 2900,
  disponible: true,
};

docker.children.innerHTML = "<p>BONJOUR<p>";


docker.children.classList.add("ICI")
docker.children.classList.add("col-12");
docker.children.classList.add("col-sm-4");
docker.children.classList.add("my-3");

docker.children.appendChild(newElt);
//card.classList.add("card");
//card.classList.add("shadow");
//card.innerHTML = "<p>CARD<p>";



showContent();