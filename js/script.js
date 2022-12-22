const gameLink = ['https://pc.blockmanmobile.com/#/game-details/g1046?onlineNumber=46768',
'https://pc.blockmanmobile.com/#/game-details/g2052?onlineNumber=9090',
'https://pc.blockmanmobile.com/#/game-details/g2061?onlineNumber=3462',
'https://pc.blockmanmobile.com/#/game-details/g2060?onlineNumber=1316',
'https://blockmango.garena.com/mini_games/article/en/11/',
'https://blockmango.garena.com/mini_games/article/en/13/',
'https://pc.blockmanmobile.com/#/game-details/g1014?onlineNumber=5363',
'https://pc.blockmanmobile.com/#/game-details/g1042?onlineNumber=1854',
'https://pc.blockmanmobile.com/#/game-details/g1048?onlineNumber=14146',
'https://pc.blockmanmobile.com/#/game-details/g1018?onlineNumber=1722',
'https://pc.blockmanmobile.com/#/game-details/g2055?onlineNumber=271',
'https://pc.blockmanmobile.com/#/'];
console.log(gameLink)

const imageST = ['https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/bedwars/bedwars_04.png',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/freecity/freecity_01.png',
'https://resource.blockmanmobile.com/web/BMGOfficialWebsite/miniGame/Frontline%20Banner%20%5B900x524%5D.jpg',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/partystreet/partystreet_01.png',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/bulletsfly/bulletsfly_01.png',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/rodentevil/rodentevil_01.png',
'https://resource.blockmanmobile.com/web/BMGOfficialWebsite/miniGame/Jail%20Break%20Banner%20%5B900x524%5D.jpg',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/buildandshoot/buildandshoot_01.jpg',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/skyblock/skyblock_01.png',
'https://resource.blockmanmobile.com/web/BMGOfficialWebsite/miniGame/Egg%20War%20Banner%20%5B900x524%5D.jpg',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/district13/district13_03.png',
'https://cdngarenanow-a.akamaihd.net/webth/cdn/garena/gamertocoder/nightatschool/nightatschool_01.png'
]

document.documentElement.style.scrollBehavior = "smooth";

fetch("https://gamertocoder.garena.co.th/api/minigames")
    .then((response) => {
        if (response.status !== 200) {//!==คือเช็คtypeด้วย
            return response.status;
        }
        return response.json();
    })
     .then((data) => {
        if (typeof data == "number") {//เช็คtype
            alert(data);
        } else {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                const j = i+1;
                const currentData = data[i]; //ตั้งตัวแปร currentData = ตัวที่ i
                const listItem = document.createElement("li"); //สร้าง li element
                listItem.classList.add("card"); //เพิ่ม class"card" ให้ li element
                
                const html =
                    '<a href="#st' + j + '"><img src="' + currentData.icon + '"/></a>' +
                    '<div class="name" onclick= changeName(' + currentData.name + ')"> ' + currentData.name + '</div>';
                html.trim();
                listItem.innerHTML = html;
                document.getElementById("list").appendChild(listItem);
            }

            for (let s = 0; s < data.length; s++) {
                const x = s+1;
                const sectionData = data[s];
                const sectionItem = document.createElement("div");
                sectionItem.classList.add("section");
                sectionItem.setAttribute("id", "st" + x)
                //เพราะว่าในapiไม่มีimagesของเกมนี้
                const html =
                '<img src="'+ imageST[s] +'">'+
                '<h3>'+ sectionData.name+'</h3>' +
                '<h4>'+sectionData.genre+'</h4>' +
                '<p>'+sectionData.description+'</p>' +
                '<a id="play" href="' + gameLink[s] + '">Play</a>';
                html.trim();
                sectionItem.innerHTML = html;
                document.getElementById("sec").appendChild(sectionItem);
            }
        }
    });
function btR() {
    let element = document.getElementById("scrollList");
    element.scrollLeft += 400;
}
function btL() {
    let element = document.getElementById("scrollList");
    element.scrollLeft -= 400;
}
//go to top button
// When clicks, scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}