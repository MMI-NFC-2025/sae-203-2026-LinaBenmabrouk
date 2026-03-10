import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

export async function getEquipe() {
    try {
        let data = await pb.collection('equipe').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste de l’équipe', error);
        return [];
    }
}

export async function getArtistes() {
  return await pb.collection("artiste").getFullList({
    sort: "date",
    expand: "lieu"
  });
}

export async function getAllArtistesByDate() {
    return await pb.collection('artiste').getFullList({
        sort: '+date'
    });
}

export async function getAllScenesByName() {
    return await pb.collection('scene').getFullList({
        sort: '+nom'
    });
}

export async function getAllArtistesByName() {
    return await pb.collection('artiste').getFullList({
        sort: '+nom'
    });
}

export async function getArtisteById(id) {
    return await pb.collection('artiste').getOne(id, {
        expand: 'lieu'
    });
}

export async function getSceneById(id) {
    return await pb.collection('scene').getOne(id);
}

export async function getArtistesBySceneId(id) {
    const scene = await pb.collection('scene').getOne(id, { expand: 'representation' });
    return scene.expand.representation.sort((a, b) => new Date(a.date) - new Date(b.date));
}

export async function getArtistesBySceneName(nom) {
    const scene = await pb.collection('scene').getFirstListItem(`nom="${nom}"`, {
        expand: 'representation'
    });

    return (scene.expand?.representation || []).sort((a, b) => new Date(a.date) - new Date(b.date));
}

export async function addArtiste(data) {
    return await pb.collection('artiste').create(data);
}

export async function updateArtiste(id, data) {
    return await pb.collection('artiste').update(id, data);
}

export async function addScene(data) {
    return await pb.collection('scene').create(data);
}

export async function updateScene(id, data) {
    return await pb.collection('scene').update(id, data);
}

