/**
 * Created by gomezgarciad on 28/08/2014.
 *
 * Compares two json files A and B and reports the attribute KEYS missed ( A Δ B )
 */
module.exports = { traverse: traverse}

function traverse(a, b) {

    for (var key in a) {
        //    console.log(key + "(" + typeof key + ")" + " is key in A");
        if (isKeyString(a, b, key)) {
            delete a[key];
            delete b[key];
        } else if (isValueObject(a, b, key)) {
            traverse(a[key], b[key]);
            removeKeysWithEmptyValues(a, b, key);
        }
    }
}

function haveProperty(a, b, key) {
    return a.hasOwnProperty(key) && b.hasOwnProperty(key);
}
function isKeyString(a, b, key) {
    return haveProperty(a, b, key) && !isValueObject(a, b, key);
}

function isValueObject(a, b, key) {
    return (typeof a[key] === typeof b[key]) && (typeof a[key] === "object");
}

function removeKeysWithEmptyValues(a, b, key) {
    removeKeyWithEmptyValue(a, key);
    removeKeyWithEmptyValue(b, key);
}
function removeKeyWithEmptyValue(a, key) {
    if (isEmpty(a[key])) {
        delete a[key];
    }
}
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
