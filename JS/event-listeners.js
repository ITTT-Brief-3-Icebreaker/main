// JOKES
if (document.querySelector('#get_jokes')) {
    document.querySelector('#get_jokes').addEventListener('click', getJokes);
}

if (document.querySelector('#get_jokes_mobile')) {
    document.querySelector('#get_jokes_mobile').addEventListener('click', getJokes);
}
if (document.querySelector('#get-pickup-lines')) {
    document.querySelector('#get-pickup-lines').addEventListener('click', getPickUpLines);
}

if (document.querySelector('#next')) {
    document.querySelector('#next').addEventListener('click', function() {
        if (event.target.classList.contains('heart')) {
            fillHeart()
        } else {
            next();
        }
    })
}

if(document.querySelector('#facts-desktop')){
    document.querySelector('#facts-desktop').addEventListener('click', getFacts);
}

if (document.querySelector('#facts-mobile')) {
    document.querySelector('#facts-mobile').addEventListener('click', getFacts);
}

if (document.querySelector('.remove')) {
    document.querySelectorAll('.remove').forEach(element => {
        console.log(element), element.addEventListener('click', removeFromAllFavourites)
    })
}