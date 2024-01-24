let movieData = [["73 Cows", "15", "2018", "The story of Jay Wilde, the first farmer in the UK to trade beef farming for sustainable organic vegan farming, giving up his entire herd of cattle in the process."],
["Cattle King", "90", "1963", "When an honest breeder refuses to sell his land to a shrewd businessman, he gets that man's girlfriend killed. Agonised, the breeder decides to take revenge."],
["The Cow", "100", "1969", "Dariush Mehrjui's compelling symbolic drama which shows the rural impoverishment that existed under the Shah of Persia."],
["Cow", "93", "2009", "Niu'er, a villager, is entrusted with the responsibility of tending to a cow when Japanese troops bomb his village and he is the only survivor."],
["Cow", "94", "2021", "Chronicling the daily life of a dairy cow in an attempt to move humans closer to them. An illumination of both their beauty and the challenge of their lives. Hoping to understand one dairy cow's reality and acknowledging her great service."],
["The cow and I", "118", "1959", "It tells the story of a French prisoner of war in World War II forced to work on a farm in Germany who decides to escape by walking away with a cow he calls Marguerite"]];
let pictures = ["73cows.jpeg", "cattleking.jpg", "cow2009.jpg", "thecow.jpg", "cow2021.jpeg", "thecowandi.jpeg"];
//let text = "";
var images = new Array()
for (let j = 0; j < pictures.length; j++) {
    img = new Image();
    img.src = pictures[j];
    images[j] = img;
}
var picture = document.getElementById("picture");
picture.innerHTML = "";
for (let k = 0; k < pictures.length; k++) {
    images[k].height = 350;
    images[k].width = 260;
    picture.appendChild(images[k]);
    var information = document.createElement("p");
    information.textContent = "Name: " + movieData[k][0] + " | Duration: " + movieData[k][1] + " | Year: " + movieData[k][2] + " | Description:" + movieData[k][3];
    picture.appendChild(information);
    var space = document.createElement("p");
    space.textContent = "    ";
    picture.appendChild(space);
}
//for (let i = 0; i < movieData.length; i++) {
    //text += "Name: " + movieData[i][0] + " <br> Duration: " + movieData[i][1] + " <br> Year: " + movieData[i][2] + " <br> Description:" + movieData[i][3] + "<br>";
//}
//document.getElementById("movies").innerHTML = text;
