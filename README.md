# langazy.js

Language Translation Assistant

## How to use

```js
const lgzData = langazy(lib => {
    /* Distinguishes translation data
       stored as objects */
    lib.exc(excData)
    /* It uses the translation data
       corresponding to the language code */
    lib.use(languageCode)
    /* Returning a value of true
       produces the resulting value */
    return true
})
```
```js
module.exports = mod => {
    mod.add('en', {
        example: 'Example'
    })
    mod.add(['no', 'da'], {
        example: 'eksempel'
    })

    /* Include deprecated languages
     * return mod.all 
     * Include only the language you are using */
    return mod.avail
}
```

## with observer
```js
function observeLangazy(languageCode) {
    const result = langazy(lib => {
        lib.exc(excData)
        lib.use(languageCode)
        return true
    })
    console.log(result)
}
```
```js
new MutationObserver(muts => {
    muts.forEach(mut => {
        if (mut.target.lang) {
            const lngCode = mut.target.lang
            observeLangazy(lngCode)
        }
    })
}).observe(
    document.documentElement, {
    attributes: true
})
```
