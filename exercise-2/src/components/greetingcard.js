import React from "react";
function Greeting({name})
{
    const time=new Date().getHours();
    const ismorng=time<16;
    const greetings= ismorng?"morning":"evening";
    const background=ismorng?'red':'yellow';

    const card={
        padding:'20px',
        margin:'20px',
        textAlign:'center',
        backgroundColor:background
    };
    return (
        <div style={card}>
        <p>Good {greetings}, {name}!</p>
        </div>
    );

}
export default Greeting;