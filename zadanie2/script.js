let wybranyElem = null;


function zmianaKoloru(el) {
    if (wybranyElem !== null) {
        wybranyElem.style.backgroundColor = "red";
    }

    let terElem = document.getElementsByClassName("elem")[el - 1];
    terElem.style.backgroundColor = "green";

    wybranyElem = terElem;
}

