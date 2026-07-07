function printHello(event){
    console.log("Hello!");
    console.log(event);//Event Object
}

function printBye(){
    console.log("Bye!");
}

function doubleClick(){
    console.log("You Double Clicked me !")
}

export default function Button(){
    return <div><button onClick={printHello}>Click me</button>
    <p onMouseOver={printBye}>See you soon!</p>  
    <button onDoubleClick={doubleClick}>Double Click Me!</button>  
    </div>
}