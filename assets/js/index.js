// const ejs = require('ejs')
// const fs = require('fs')


// let number = 3

// ejs.renderFile('../../views/index.ejs', { number }, (error, html) => {
//     fs.writeFile('../../index.html', html, (error) => {
//         console.log('ok')
//     })
//     console.log(html);
// })

// export const buildTemplate = (nItems) => {
//     ejs.renderFile('../../views/index.ejs', { nItems }, (error, html) => {
//         fs.writeFile('../../index.html', html, (error) => {
//             console.log('ok')
//         })
//     })
// }

//Function to accept only Numbers on Input Quantity
function isInputNumber(e) {
    let char = String.fromCharCode(e.which)
    
    if(!(/[0-9]/.test(char))) {
        e.preventDefault()
    }
}