import React, {useState} from 'react';

const Room = () => {
    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(23);
    console.log(isLit);
    
    function updateLit() {
        //isLit ? setLit(false) : setLit(true);
        setLit(!isLit);
        setAge(age+1);
    }
    
    return (        
        <div>
            The room is : {isLit ? 'lit' : 'dark'}
            <br/>{age}
            <button onClick = {() => setAge(age+2)}>Toggle Light</button>
        </div>
    );
}

export default Room;