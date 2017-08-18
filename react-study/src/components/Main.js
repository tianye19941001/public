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
  console.log(imgArr)
	return imgArr;
})(imagesDatas);



class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <section className="stage">
        	<section className="img-sec">
        	</section>
        	<nav className="controller-nav">
        	</nav>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
