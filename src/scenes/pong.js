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
        "0xFFFFFF", 1);
    PP.shapes.rectangles_add(s,
        1240, 360, 20, 120,
        "0xFFFFFF", 1);
    PP.shapes.rectangles_add(s,
        640, 360, 1280, 20,
        "0xFFFFFF", 1);
}

function update(s) {}

function destroy(s) {}

PP.scenes.add("pong", preload, create, update, destroy);
