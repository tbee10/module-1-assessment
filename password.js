const readLine = require('readline')

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question(
    'Welcome to the password validator! Please input a password: ',
    function (input) {
        console.log(input)
        console.log(input.length)

        if (input.length >= 10){
            console.log('Your password is successful!')
         } else {
                console.log('Your password is invalid')
               
                reader.close()
            }
        }
)

