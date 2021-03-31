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

export default {menu,servers,portalInfos}