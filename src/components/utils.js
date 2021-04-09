import {v4 as uuidv4} from 'uuid';

const menu = [
    {
        'id' : uuidv4(),
        'title' : "Ecaflipus"
    },
    {
        'id' : uuidv4(),
        'title' : "Enutrosor"
    },
    {
        'id' : uuidv4(),
        'title' : "Srambad"
    },
    {
        'id' : uuidv4(),
        'title' : "Xelorium"
    }
]

const servers = [
    {
        'id' : uuidv4(),
        'title' : "Ilyzaelle"
    },
    {
        'id' : uuidv4(),
        'title' : "Meriana"
    },
    {
        'id' : uuidv4(),
        'title' : "Furye"
    },
    {
        'id' : uuidv4(),
        'title' : "Agride"
    }
]

const PortalModificators = [
        {
            'name' : 'ecaflipus',
            'modificators' : [
            'Régénération Critique',
            'Puissance Cyclique',
            'Roulette Élémentaire',
            'Poussées Revigorantes',
            'Case Bonus',
            'Liaison Longue Portée',
            'Cible prioritaire',
            'Invocations Incapacitantes',
            'Bonne Distance',
            'Disparitions détonantes'
            ],
        },

        {
            'name' : 'enutrosor',
            'modificators' : [
            'Poussées revigorantes',
            'Entraves blessantes',
            'Liaison longue portée',
            'Déplacements incapacitants',
            'Invocations incapacitantes',
            'Solitude revigorante',
            'Puissance cyclique',
            'Solidaires',
            'Distance mesurée',
            'Disparitions détonantes'
            ],
        },

        {
            'name' : 'srambad',
            'modificators' : [
            'Coups bas',
            'Invocations incapacitantes',
            'Berserker',
            'Disparitions détonantes',
            'Jeu dangereux',
            'Poussées revigorantes',
            'Larcin',
            'Liaison longue portée',
            'Evasion',
            'Puissance cyclique',
            ],
        },

        {
            'name' : 'xelorium',
            'modificators' : [
            'En quête d\'action',
            'Puissance cyclique',
            'Saute-Bouftou',
            'Disparitions détonantes',
            'Retour arrière',
            'Liaison longue portée',
            'Actions entravées',
            'Poussées revigorantes',
            'Solitude Momifiante',
            'Invocations incapacitantes'
            ]
        }

]

const portalInfos = [
    {
        'id': uuidv4(),
        'title': "enutrosor",
        'server': "ilyzaelle",
        'position':"[15,-65]",
        'utilisations': "89",
        'up':'15',
        'down':'2',
    }
]

export default {menu,servers,portalInfos,PortalModificators}