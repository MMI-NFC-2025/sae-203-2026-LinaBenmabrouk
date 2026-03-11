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
import { addNewUser, loginUser, getCurrentUser, isAuthValid, clearAuth } from './backend.mjs';

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

try {
  const unique = Date.now();
  const password = "Azerty123!";

  const userData = {
    email: `user${unique}@mmi.local`,
    password,
    passwordConfirm: password,
    name: `User_${unique}`
  };

  const createdUser = await addNewUser(userData);
  console.log("Utilisateur créé :", createdUser.id, createdUser.email);

  clearAuth();
  console.log("Auth valide avant connexion :", isAuthValid());

  const authData = await loginUser(userData.email, password);
  console.log("Connexion réussie :", authData.record.email);

  console.log("Auth valide après connexion :", isAuthValid());
  console.log("Utilisateur courant :", getCurrentUser());

  clearAuth();
  console.log("Auth valide après déconnexion :", isAuthValid());
} catch (e) {
  console.error("Erreur test user :", e.response?.message || e.message);
}
*/