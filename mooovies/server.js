//<script type="text/javascript" src="movies.json"></script>
//var mydata = JSON.parse(movies);
let movieData = [["73 Cows", "15", "2018", "The story of Jay Wilde, the first farmer in the UK to trade beef farming for sustainable organic vegan farming, giving up his", "entire herd of cattle in the process."],
["Cattle King", "90", "1963", "When an honest breeder refuses to sell his land to a shrewd businessman, he gets that man's girlfriend killed. Agonised, the breeder", "decides to take revenge."],
["The Cow", "100", "1969", "Dariush Mehrjui's compelling symbolic drama which shows the rural impoverishment that existed under the Shah of Persia.", ""],
["Cow", "93", "2009", "Niu'er, a villager, is entrusted with the responsibility of tending to a cow when Japanese troops bomb his village and he is the ", "only survivor."],
["Cow", "94", "2021", "Chronicling the daily life of a dairy cow in an attempt to move humans closer to them. An illumination of both their beauty and", " the challenge of their lives. Hoping to understand one dairy cow's reality and acknowledging her great service."],
["The cow and I", "118", "1959", "It tells the story of a French prisoner of war in World War II forced to work on a farm in Germany who decides to", " escape by walking away with a cow he calls Marguerite."]];
let pictures = ["73cows.jpeg", "cattleking.jpg", "cow2009.jpg", "thecow.jpg", "cow2021.jpeg", "thecowandi.jpeg"];
let movieData2 = [["First cow", "121", "2019", "Two travelers, on the run from a band of vengeful hunters in the 1820s Northwest, dream of striking it rich -- but", "their tenuous plan to make their fortune on the frontier comes to rely on the secret use of a landowner's prized dairy cow."],
    ["Sacred cow", "80", "2020", "A film about the current debate on eating and raising cattle for food, showing that animal-sourced foods", " are nutritious for humans and can be raised in a way that is beneficial for the environment."],
    ["The Moo Man", "98", "2013", "A heart warming, tearjerker of a movie about the incredible bonds between man, animal and countryside.", ""],
    ["Barnyard", "90", "2006", "Otis, a carefree dairy bull, has a heavy responsibility thrust upon him to protect his kind when his father is killed by coyotes.", ""],
    ["Ferdinand", "108", "2017", "A soft-hearted bull, Ferdinand, escapes from Casa del Toro after his father does not return from the bullfight. However, due", " to a turn of events, he is taken back to the place he escaped from."],
    ["The Cow Who Wanted To Be A Hamburger", "5", "2010", "A young cow is extremely enthralled by the marketing power of a hamburger hoarding, and his", " ultimate goal is to become the best hamburger."]];
let pictures2 = ["firstcow.jpeg", "sacredcow.jpg", "themooman.jpeg", "barnyard.jpeg", "ferdinand.jpeg", "hamburger.jpeg"];
let ratings = ["", "", "", "", "", ""];
let ratings2 = ["", "", "", "", "", ""];
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
    information.style.fontSize = "12px";
    information.textContent = "Name: " + movieData[k][0] + " | Duration: " + movieData[k][1] + " minutes | Year: " + movieData[k][2] + " | Your rating: " + localStorage.getItem(movieData[k][0]);
    var information2 = document.createElement("p");
    information2.style.fontSize = "12px";
    information2.textContent = "Description:" + movieData[k][3];
    var information3 = document.createElement("p");
    information3.style.fontSize = "12px";
    information3.textContent = movieData[k][4];
    picture.appendChild(information);
    picture.appendChild(information2);
    picture.appendChild(information3);
    const button = document.createElement('button');
    button.innerText = 'Rate';
    button.addEventListener('click', () => {
        var rating = prompt("What do you rate this out of 5");
        localStorage.setItem(movieData[k][0], rating);
        location.reload();
    })
    picture.appendChild(button);
    var space = document.createElement("p");
    space.textContent = "    ";
    picture.appendChild(space);
}
var images2 = new Array();
for (let i = 0; i < pictures2.length; i++) {
    img2 = new Image();
    img2.src = pictures2[i];
    images2[i] = img2;
}
var picture2 = document.getElementById("picture2");
picture2.innerHTML = "";
for (let l = 0; l < pictures2.length; l++) {
    images2[l].height = 350;
    images2[l].width = 260;
    picture2.appendChild(images2[l]);
    var information4 = document.createElement("p");
    information4.style.fontSize = "12px";
    information4.textContent = "Name: " + movieData2[l][0] + " | Duration: " + movieData2[l][1] + " minutes | Year: " + movieData2[l][2] + " | Your rating: " + localStorage.getItem(movieData2[l][0]);
    var information5 = document.createElement("p");
    information5.style.fontSize = "12px";
    information5.textContent = "Description:" + movieData2[l][3];
    var information6 = document.createElement("p");
    information6.style.fontSize = "12px";
    information6.textContent = movieData2[l][4];
    picture2.appendChild(information4);
    picture2.appendChild(information5);
    picture2.appendChild(information6);
    const button2 = document.createElement('button');
    button2.innerText = 'Rate';
    button2.addEventListener('click', () => {
        var rating2 = prompt("What do you rate this out of 5");
        localStorage.setItem(movieData2[l][0], rating2);
        location.reload();
    })
    picture2.appendChild(button2);
    var space = document.createElement("p");
    space.textContent = "    ";
    picture2.appendChild(space);
}
var images3 = new Array()
for (let a = 0; a < pictures.length; a++) {
    img3 = new Image();
    img3.src = pictures[a];
    images3[a] = img3;
}
var picture3 = document.getElementById("moviesSeen");
for (let i = 0; i < pictures.length; i++) {
    var temp = localStorage.getItem(movieData[i][0]);
    if (temp == "1" || temp == "2" || temp == "3" || temp == "4" || temp == "5") {
        images3[i].height = 350;
        images3[i].width = 260;
        picture3.appendChild(images3[i]);
    }
}