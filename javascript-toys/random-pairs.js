/**
 * Randomly extracts an element from an array.
 * @param array Input array
 * @returns {{extracted, newArray: []}} newArray is the input array without the extracted element.
 */
const extractRandomEntry = ( array ) => {
    const randomIndex = Math.floor( Math.random() * array.length );
    return {
        extracted: array[ randomIndex ],
        newArray: array.filter( ( el, ix ) => ix !== randomIndex ),
    };
};

/**
 * Creates pairs from an array of data.
 * @param {Array} data
 * @returns {Array[]} Array of data touples
 */
const createPairs = ( data ) => {
    const left = [];
    const right = [];

    while ( data.length > 0 ) {
        let result = extractRandomEntry( data );
        left.push( result.extracted );
        data = result.newArray;
        let result2 = extractRandomEntry( data );
        right.push( result2.extracted );
        data = result2.newArray;
    }

    return left.reduce( ( pairs, l, ix ) => {
        const r = right[ ix ];
        pairs.push( [ l, r ] );
        return pairs;
    }, [] );

};

const letters = 'abcdefghijklm'.split( '' );
const pairs = createPairs( letters );

console.log( '-----' );
console.log( 'Pairs' );
console.log( '-----' );

pairs.forEach( pair => console.log( `${pair[ 0 ]} and ${pair[ 1 ]}` ) );