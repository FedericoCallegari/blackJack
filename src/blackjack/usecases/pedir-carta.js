
/**
 * @param {Array<String>} deck es un array string
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new error('No hay cartas en el deck'); 
    }
    const carta = deck.pop();
    return carta;
}