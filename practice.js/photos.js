const loadPhotos = function () {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
const displayPhotos = photos =>  {
    photos.forEach(photo => {
        const photoBox = document.getElementById('photoBox');
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('col')
        photoDiv.innerHTML = `
            <div class="card h-100">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
                <p class="card-text"><a href="${photo.url}">${photo.url}</a> </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button onclick="albumDetail('${photo.id}')" class="btn btn-outline-primary" type="button"data-bs-toggle="modal" data-bs-target="#staticBackdrop">Button</button>
                </div>
            </div>
        </div>  
        `
        photoBox.appendChild(photoDiv);
    });
}
const albumDetail = function (albumId) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
}

const displayDetails = photos => {
    const modalPhoto = document.getElementById('modal-photo');
    modalPhoto.innerHTML = `
    <h3>${photos.userId}</h3>
    <h1>${photos.id}</h1>
    <h5>${photos.title}</h5>
    `
}

loadPhotos()