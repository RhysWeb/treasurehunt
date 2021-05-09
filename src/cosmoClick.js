import Swal from "sweetalert2";

let responses = [
    'Woof! What do you want?',
    "Woof! Woof!",
    "Woooofff!!!",
    "Mieow!..I mean Woof!!",
    'Whine! Stop clicking me!', 
    'Ahhh-Wooooo do you think you are?', 
    'Oyyyyy!!!',     
    'Woof Woof. Please leave me alone', 
    'Be kind and leave me alone',
    'What now!',
    "If you click me again i'll bite your ankle",
    "Woof! I don't like being clicked, thank you.",
    "Woof! Woof! Grrrrrrr!"
]

export const cosmoClick = () => {
    Swal.fire({
        text: responses[Math.floor(Math.random()*responses.length)],
        })
    //alert(responses[Math.floor(Math.random()*responses.length)])
}