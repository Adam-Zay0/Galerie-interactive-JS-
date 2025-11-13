function upDate(previewPic) {
    console.log("Événement déclenché sur :", previewPic.alt);
    
    // 1️⃣ Modifier le texte du div #image
    document.getElementById('image').innerHTML = previewPic.alt;
    
    // 2️⃣ Modifier l’image d’arrière-plan du div #image
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
    console.log("Souris sortie de l’image.");

    // 3️⃣ Réinitialiser le texte
    document.getElementById('image').innerHTML = "Survolez une image ci-dessous pour l’afficher ici";

    // 4️⃣ Réinitialiser l’image d’arrière-plan
    document.getElementById('image').style.backgroundImage = "url('')";
}
