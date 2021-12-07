"use strict";

let myCar = {
    make: 'Renault',
    model: 'Twingo 3',
    year: 2014,
    buy: new Date("2015-07-31"),
    passagers :[ 'Audrey', 'Gribouille' ]
};



document.querySelector("#content");
const DIV = document.querySelector("#content");
let content = DIV.innerHTML;
DIV.innerHTML = `<h2>Informations sur la voiture :</h2>
                <ul>
                    <li>Marque : ${myCar.make} ${myCar.model}</li>
                    <li>Année de fabrication : ${myCar.year}</li>
                    <li>Date de l'achat : ${myCar.buy.toDateString()}</li>
                    <li>Passagers : 
                        <ol>
                            <li>${myCar.passagers[0]}</li>
                            <li>${myCar.passagers[1]}</li>
                        </ol>
                    </li>
                </ul>`;