import React, { useState } from "react";


export default function About() {
const[mystyle, setStyle] = useState({
  color: 'Black',
  backgroundColor: 'White'
})

const toggleStyle = ()=>{
  if(mystyle.color === 'Black'){ 
    setStyle ({
      color: 'White',
      backgroundColor: 'Black'
    })
    document.getElementById('btntoggle').innerHTML='Enable Light Mode'
  }
  else{
    setStyle({
      color: 'Black',
      backgroundColor: 'White'
    })
    document.getElementById('btntoggle').innerHTML='Enable Dark Mode'
  }
}

  return (
    <div className="container my-3">
      <div className="accordion" id="accordionExample" >
        <div className="card">
          <div className="card-header" id="headingOne" style={mystyle}>
            <h2 className="mb-0">
              <button style={mystyle}
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={mystyle}>
              Some placeholder content for the first accordion panel. This panel
              is shown by default, thanks to the <code>.show</code> class.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={mystyle}>
            <h2 className="mb-0">
              <button style={mystyle}
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={mystyle}>
              Some placeholder content for the second accordion panel. This
              panel is hidden by default.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree" style={mystyle}>
            <h2 className="mb-0">
              <button style={mystyle}
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={mystyle}>
              And lastly, the placeholder content for the third and final
              accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary m-3" onClick={toggleStyle} id="btntoggle">Enable Dark Mode</button>
    </div>
  );
}
