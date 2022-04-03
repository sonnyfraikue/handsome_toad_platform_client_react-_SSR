import React from 'react';
import styles from "./ImageGen.module.scss";

class ImageGen extends React.Component {

  theCanvas = {
    width:null,
    height:50
  }
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }

  componentDidMount() {

    let canvasTxt = document.getElementById("canvasComponent").getContext("2d");
      this.theCanvas = {
       width:canvasTxt.measureText(this.props.name).width*3,
       height:50
     }
     let fillOrStroke = 'stroke';
     canvasTxt.fillStyle = "#fcf9ed";
     canvasTxt.fillRect(0, 0, this.theCanvas.width, this.theCanvas.height);
     
     //Box
     canvasTxt.strokeStyle = "#ccc ";
     canvasTxt.strokeRect(2,  2, this.theCanvas.width, this.theCanvas.height/1.04);

     //Text
     canvasTxt.font = "27px Comic Sans MS"

     let metrics = this.theCanvas;
     let textWidth = metrics.width;
     let xPosition = 2.5;
     let yPosition = (this.theCanvas.height/1.4);

     switch(fillOrStroke) {
        case "fill":
           canvasTxt.fillStyle = "#51cbce";
               canvasTxt.fillText (this.props.name, xPosition,yPosition);
           break;
        case "stroke":
           canvasTxt.strokeStyle = "#51cbce";
           canvasTxt.strokeText (this.props.name, xPosition,yPosition);
           break;
        case "both":
           canvasTxt.fillStyle = "#51cbce";
               canvasTxt.fillText (this.props.name, xPosition ,yPosition);
           canvasTxt.strokeStyle = "#000000";
           canvasTxt.strokeText (this.props.name, xPosition,yPosition);
           break;
     }
    
    this.setState({
      img: canvasTxt.canvas.toDataURL()
    });
  }

  render() {
    return (
      <div className={`${styles['canvas-wrapper']}`}>
        <canvas id="canvasComponent" style={{ display: "none", width:this.theCanvas.width, height:this.theCanvas.height }} />
        {this.state.img.length > 0 ?
            <img id="imageComponent" src={this.state.img} />
        : null}
      </div>
    );
  }
}

// ReactDOM.render(
//   <ImageGen name="Hello world!" x="0" y="10" />,
//   document.getElementById("container")
// );

export default ImageGen;