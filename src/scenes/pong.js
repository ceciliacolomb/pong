const BIANCO = "0xFFFFFF";
const L_RACCHETTA = 20;
const A_RACCHETTA = 120;
const L_PALLINA = 24;
const MARGINE = 40;
let racchetta_sx;
let racchetta_dx;
let pallina;


function preload(s) {}

function create(s) {
    racchetta_sx = PP.shapes.rectangles_add(s,
        MARGINE, ALTEZZA / 2, L_RACCHETTA, A_RACCHETTA, BIANCO, 1);
    racchetta_dx = PP.shapes.rectangles_add(s,
        LARGHEZZA - MARGINE, ALTEZZA / 2, L_RACCHETTA, A_RACCHETTA, BIANCO, 1);
    pallina = PP.shapes.rectangles_add(s,
        LARGHEZZA / 2, ALTEZZA / 2, L_PALLINA, L_PALLINA, BIANCO, 1);

}


function update(s) {}
    

function destroy(s) {}

const VEL_RACCHETTA = 8;
const TASTO_SU_SX = PP.key_codes.W;
const TASTO_GIU_SX = PP.key_codes.S;
const TASTO_SU_DX = PP.key_codes.UP;
const TASTO_GIU_DX = PP.key_codes.DOWN;

PP.scenes.add("pong", preload, create, update, destroy);
