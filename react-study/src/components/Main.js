require('normalize.css/normalize.css');
require('../styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

// 获取图片数据
let imagesDatas = require('../data/imagesDatas.json');

// 将图片信息转换成图片URL路径信息
imagesDatas =  (function genImageURL(imgArr) {
	for (var i = 0; i< imgArr.length ; i++) {
		var singleImageData = imgArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.filesName);
    imgArr[i] = singleImageData;
  }
	return imgArr;
})(imagesDatas);

let ImgFigure = React.createClass({
  render(){
    return(
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
})

class AppComponent extends React.Component {
  Constant:{
    centerPos:{
      left: 0,
      right: 0
    },
    hPosRange:{
      leftSecX: [0,0],
      rightSecX: [0,0],
      y:[0,0]
    },
    vPosRange:{
      x:[0,0],
      topY:[0,0]
    }
  },
  rearrange: function(centerIndex) {
    
  },
  getInitialState: function () {
    return {
        imgsArrangeArr: [
            /*{
                pos: {
                    left: '0',
                    top: '0'
                },
                rotate: 0,    // 旋转角度
                isInverse: false,    // 图片正反面
                isCenter: false,    // 图片是否居中
            }*/
        ]
    };
  },
  componentDidMount: function(){
    var stageDom = React.findDomNode(this.refs.stage),
        stageW = stageDom.scrollWidth,
        stageH = stageDom.scrollHeight,
        halfStageW = Math.ceil(stageW/2),
        halfStageH = Math.ceil(stageH/2)

    var imgFigureDom = React.findDomNode(this.refs.imgFigure0),
        imgW = imgFigureDom.scrollWidth,
        imgH = imgFigureDom.scrollHeight,
        halfImgW = Math.ceil(imgW/2),
        halfImgH = Math.ceil(imgH/2);

    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }

    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.Constant.vPosRange.x[0] = halfStageW - imgW;
    this.Constant.vPosRange.x[1] = halfStageW;

    this.rearrange(0);

  },
  render() {
    let controllerUnits = [],
        imgFigures = [];
    imagesDatas.forEach(function(value,index){
      if (!this.state.imgsArrangeArr[index]) {
        this.stage.imgsArrangeArr[index] = {
          pos:{
            left:0,
            top:0
          }
        }
      }
      imgFigures.push(<ImgFigure data={value} ref={'imgFigure'+index}/>);
    }.bind(this));
    return (
      <div>
        <section className="stage" ref="stage">
        	<section className="img-sec">
            {imgFigures}
        	</section>  
        	<nav className="controller-nav">
            {controllerUnits}
        	</nav>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
