import { getAllArtistesByDate } from './backend.mjs';
import { getAllScenesByName } from './backend.mjs';
import { getAllArtistesByName } from './backend.mjs';
import { getArtisteById } from './backend.mjs';
import { getSceneById } from './backend.mjs';
import { getArtistesBySceneId } from './backend.mjs';
import { getArtistesBySceneName } from './backend.mjs';
import { addArtiste } from './backend.mjs';
import { updateArtiste } from './backend.mjs';
import { addScene } from './backend.mjs';
import { updateScene } from './backend.mjs';

/*
try {
    const result = await getAllArtistesByDate();
    console.log(result);
} catch (e) {
    console.error(e);
}

try {
    const result = await getAllScenesByName();
    console.log(result);
} catch (e) {
    console.error(e);
}

try {
    const result = await getAllArtistesByName();
    console.log(result);
} catch (e) {
    console.error(e);
}

try {
    const result = await getArtisteById('eliasturnerskyt');
    console.log(result);
} catch (e) {
    console.error(e);
}

try {
    const result = await getSceneById('sceneciel333333');
    console.log(result);
} catch (e) {
    console.error(e);
}

try {
    const artistes = await getArtistesBySceneId('grandescene1111');
    console.log(artistes);
} catch (e) {
    console.error(e);
}

try {
    const artistes = await getArtistesBySceneName("Scène Lumière");
    console.log(artistes);
} catch (e) {
    console.error(e);
}

try {
    const artiste = await addArtiste({
        nom: "Nouvel Artiste",
        date: "2026-06-10 20:00:00.000Z",
        description: "Artiste ajouté pour test"
    });

    console.log(artiste);
} catch (e) {
    console.error(e);
}

try {
    const artiste = await updateArtiste("ajbqen8vys4g5wn", {
        description: "Description modifiée"
    });

    console.log(artiste);
} catch (e) {
    console.error(e);
}

try {
    const scene = await addScene({
        nom: "Nouvelle Scène",
        description: "Scène ajoutée pour test",
        capacite: 500
    });

    console.log(scene);
} catch (e) {
    console.error(e);
}

try {
    const scene = await updateScene("l37j8brb3xfflwm", {
        description: "Description modifiée"
    });

    console.log(scene);
} catch (e) {
    console.error(e);
}

try {
    const result = await getAllArtistesByDate();
    console.log(result);
} catch (e) {
    console.error(e);
}
*/