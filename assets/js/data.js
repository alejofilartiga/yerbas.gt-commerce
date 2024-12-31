import canTrad from './products/canarias/cantrad.png';
import canSere from './products/canarias/cansere.png';
import canRojo from './products/canarias/canrojo.png';
import canEspe from './products/canarias/canespe.png';
import canTermo from './products/canarias/canter.png';
import canVerde from './products/canarias/canver.png';

import reiClasi from './products/rei/reiclasi.png';
import reiComp from './products/rei/reicomp.png';
import reiPalo from './products/rei/reipalo.png';
import reiPre from './products/rei/reipre.png';
import reiTrad from './products/rei/reitrad.png';

import baldo from './products/otros/baldo.png';
import saraClasi from './products/otros/saraclas.png';
import saraAzul from './products/otros/sarazul.png';
import taragui from './products/otros/taragui.png';

export const products = {
    canarias: [
        {
            id: 1,
            name: "Canarias Tradicional",
            price: 5000,
            img: canTrad
        },
        {
            id: 2,
            name: "Canarias Serena",
            price: 7000,
            img: canSere
        },
        {
            id: 3,
            name: "Canarias Te Rojo",
            price: 9000,
            img: canRojo
        },
        {
            id: 4,
            name: "Canarias Especial",
            price: 8000,
            img: canEspe
        },
        {
            id: 5,
            name: "Termo Canarias",
            price: 4000,
            img: canTermo
        },
        {
            id: 6,
            name: "Canarias Te Verde",
            price: 7600,
            img: canVerde
        }
    ],
    reiverde: [
        {
            id: 7,
            name: "Rei Verde Clasica",
            price: 7290,
            img: reiClasi
        },
        {
            id: 8,
            name: "Rei Verde Compuesta",
            price: 7500,
            img: reiComp
        },
        {
            id: 9,
            name: "Rei Verde Palo",
            price: 7800,
            img: reiPalo
        },
        {
            id: 10,
            name: "Rei Verde Premium",
            price: 8000,
            img: reiPre
        },
        {
            id: 11,
            name: "Rei Verde Tradicional",
            price: 8200,
            img: reiTrad
        }
    ],
    otros: [
        {
            id: 12,
            name: "Baldo",
            price: 6000,
            img: baldo
        },
        {
            id: 13,
            name: "Sara Clasica",
            price: 6500,
            img: saraClasi
        },
        {
            id: 14,
            name: "Sara Azul",
            price: 6700,
            img: saraAzul
        },
        {
            id: 15,
            name: "Taragui",
            price: 7000,
            img: taragui
        }
    ]
};