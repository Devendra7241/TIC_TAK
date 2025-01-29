let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.lang = "hi-GB"
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours < 12){
        speak("Good morning sir")
    }
    else if(hours >= 12 && hours < 16){
        speak("Good afternoon sir")
    }else{
        speak("Good evening sir")
    }
}

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
};

btn.addEventListener("click", () => {
    recognition.start();    
    btn.style.display = "none" // Corrected here
    voice.style.display = "block" // Corrected here
});

function takeCommand(message){
    btn.style.display = "flex" // Corrected here
    voice.style.display = "none" // Corrected here
    if (message.includes("hello") || message.includes("hey")){
        speak("hello sir, what can i help you")
    }
    else if (message.includes("who are you")){
        speak("i am virtual assistant, created by devendra")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("whatspap://","_blank")
    }
    else if(message.includes("time")){
       let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
        speak(time)
     }
    else{
       let finalText="this is what i found on internet regarding" + message.replace("shifra","")|| message.replace("shipra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shifra","")||message.replace("shipra","")}`)
    }
}
