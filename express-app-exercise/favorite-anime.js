const http = require("http")
const express = require("express")

const app = express();
const server = http.createServer(app);

app.get(`/` , (req, res) => {
    res.send(`
    <h1>"The Port is OVER 8000! "</h1> 
    <h2>\n  ***** \n Favorite Animes \n *****"</h2> 
        <ul>
            <li><a href = "/anime">Lets Explore</a></li>
        </ul>
        `);
 });


app.get(`/:anime` , (req, res) => {
    res.send(`
    <h1>"favorite animes"<h1>
    <ul>
        <li><a href = "/anime/fav/jojo">Jo Jo's Bizarre Adventure</a></li>
        <li><a href = "/anime/fav/hxh">Hunter X Hunter</a></li>
        <li><a href = "/anime/fav/fmab">Full Metal Alchemist Brotherhood</a></li>
    </ul>
    `);
});

app.get(`/anime/fav/:jojo`, (res, req) => {
    const jojo = req.params.jojo;
    res.send(`The universe of JoJo's Bizarre Adventure is a reflection of the real world with the added existence of supernatural 
    forces and beings.[2] In this setting, some people are capable of 
    transforming their inner spiritual power into a Stand (スタンド, Sutando); 
    another significant form of energy is Hamon (波紋, "Ripple"), a martial 
    arts technique that allows its user to focus bodily energy into sunlight 
    via controlled breathing. The narrative of JoJo's Bizarre Adventure is 
    split into parts with independent stories and different characters. 
    Each of the series' protagonists is a member of the Joestar family, 
    whose mainline descendants possess a star-shaped birthmark above their 
    left shoulder blade and a name that can be abbreviated to the titular 
    "JoJo".[a] The first six parts take place within a single continuity 
    whose generational conflict stems from the rivalry between Jonathan 
    Joestar and Dio Brando, while the latter two parts take place in an 
    alternate universe where the Joestar family tree is heavily altered.`)

});
app.get(`/anime/fav/:hxh`, (res, req) => {
    const hxh = req.params.hxh;
    res.send(`The story follows a young boy named Gon Freecss, who was told 
    all his life that both his parents were dead. But when he learns from 
    Kite, an apprentice of his father Ging Freecss, that he is still alive 
    and has since become an accomplished Hunter, Gon leaves his home on Whale 
    Island (くじら島, Kujira Tō) to take the Hunter Examination (ハンター試験, 
        Hantā Shiken) in order to become a Hunter like him.[9][10][11] During 
        the exam, Gon meets and soon befriends three of the other applicants: 
        Kurapika, the last remaining member of the Kurta clan who wishes to
         become a Hunter in order to avenge his clan and recover their 
         scarlet-glowing eyes that were plucked from their corpses by a 
         band of thieves known as the Phantom Troupe; Leorio, a prospective 
         physician who, in order to pay for medical school, desires the 
         financial benefits that Hunters receive; and Killua Zoldyck, 
         another twelve-year-old boy who has left his former life as a 
         member of the world's most notorious assassin family.[10][11][3]
          Among many other examinees, Gon continuously encounters Hisoka, 
          a mysterious and deadly transmuter who takes an interest in him. 
          After passing by many trials together, Gon and his friends end up 
          passing the exam except for Killua, who fails after killing another 
          applicant due to being controlled by his brother, Illumi, and runs 
          away to his family's estate in shame.`)

});
app.get(`/anime/fav/:fmab`, (res, req) => {
    const fmab = req.params.fmab;
    res.send(`Brothers Edward and Alphonse Elric are raised by their 
    mother Trisha Elric in the remote village of Resembool in the 
    country of Amestris. Their father Hohenheim, a noted and very 
    gifted alchemist, abandoned his family while the boys were still 
    young, and while in Trisha's care they began to show an affinity for 
    alchemy and became curious about its secrets. However, when Trisha 
    died of a lingering illness, they were cared for by their best friend 
    Winry Rockbell and her grandmother Pinako. The boys traveled the world 
    to advance their alchemic training under Izumi Curtis. Upon returning 
    home, the two decide to try to bring their mother back to life with 
    alchemy. However, human transmutation is a taboo, as it is impossible 
    to do so properly. In the failed transmutation that results, Al's body 
    is completely obliterated, and Ed loses his left leg. In a last ditch 
    attempt to keep his brother alive, Ed sacrifices his right arm to bring 
    Al's soul back and houses it in a nearby suit of armor. After Edward 
    receives automail prosthetics from Winry and Pinako, the brothers decide 
    to burn their childhood home down (symbolizing their determination and 
        decision of "no turning back") and head to the capital city to become 
        government sanctioned State Alchemists. After passing the exam, 
        Edward is dubbed the "Fullmetal Alchemist" by the State Military, 
        and the brothers begin their quest to regain their full bodies back 
        through the fabled Philosopher's Stone, under the direction of 
        Colonel Roy Mustang. Along the way, they discover a deep government 
        conspiracy to hide the true nature of the Philosopher's Stone that 
        involves the homunculi, the alchemists of the neighboring nation of 
        Xing, the scarred man from the war-torn nation of Ishbal, and their 
        own father's past.`)

});



server.listen(8001, `localhost`, () => {
console.log(`running on server 8001`)
});