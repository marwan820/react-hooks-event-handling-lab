// Code Keypad Component Here

function Keypad (){
    function handleInput(){
        console.log("Entering password...")

    }


    return (
        <form>
            <input type="password" onChange={handleInput}/>
            
        


        </form>

        
    )
}

export default Keypad