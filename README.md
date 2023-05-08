# Nuvola Fixes

Nuvola (di Madisoft) è un registro elettronico usato in Italia.
L'interfaccia a volte può necessitare di qualche cambiamento per essere
resa più utile rispetto a delle necessità.

Qui c'è (ci sarà) una piccola raccolta di script che modificano il DOM
del registro.

## Bookmarklet

### Evidenziatore dei voti insufficienti

Da usare nella pagina Report / Valutazioni / Medie. Selezionare un voto
negativo e cliccare sul bookmarklet.

[Nuvola - EvidenziaVotiNegativi](javascript:(function()%7Bconst%20className%20%3D%20getSelection().getRangeAt(0).commonAncestorContainer.parentNode.classList%5B1%5D%3B%0A%20%0Adocument.querySelectorAll('.'%20%2B%20className).forEach(function(x)%7B%0A%20%20%20%20x.style.color%20%3D%20%22white%22%3B%0A%20%20%20%20x.style%5B'background-color'%5D%20%3D%20%22red%22%3B%0A%7D)%3B%7D)()%3B)


## Credits

I bookmarket sono stati creati con [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)
