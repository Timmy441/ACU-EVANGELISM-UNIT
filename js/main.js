function saveBook(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function() {
        let imageData = reader.result;

        db.collection("books").add({
            image: imageData,
            time: new Date()
        });

        alert("Saved online!");
    }

    reader.readAsDataURL(file);
}