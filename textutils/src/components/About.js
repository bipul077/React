import React,{useState} from 'react'

export default function About(props) {

//   const [myStyle,setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//   })  
    let myStyle={
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
    }
//     const [btntext,setBtnText] = useState("Enable Dark mode")
//     const toggleStyle = () =>{
//     if(myStyle.color === 'black'){
//         // setMyStyle({
//         //     color: 'white',
//         //     backgroundColor: 'black',
//         //     border: '1px solid white'
//         // })
//         setBtnText("Enable Light Mode")
//     }
//     else{
//         // setMyStyle({
//         //     color: 'black',
//         //     backgroundColor: 'white',
//         // })
//         setBtnText("Enable Dark Mode")
//     }
//   }


  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}> 
                    This is the first item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the code.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo" style={myStyle}>
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the second item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the code.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the code.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
            </div> */}
    </div>
  )
}
