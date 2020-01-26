'use strict';

function sortTagsByPinyin() {
	// 方法一：构造临时数组，但在执行themes/fexo/layout/tag.ejs中的getPostListsDom不能通过编译
//	var pinyin = require("pinyin"); // https://github.com/hotoo/pinyin $ npm install pinyin
//	var tags = this.site.tags;
//	
//	var myTags = [];
//	  tags.forEach(function(tag){
//	    if(tag.length !== 0){
//	      myTags.push({name: tag.name, length: tag.length, path: tag.path, _id: tag._id});
//	    }
//	  });
//	  var myTagsSorted = myTags.sort(pinyin.compare);
//
//	  tags = myTagsSorted;
//	  
////	  tags.forEach(function(tag){
////		  console.log(tag.name);
////		  });
//	  this.site.tags = tags;
	  
	// 方法二：先修改node_modules/warehouse/lib/model.js，使sort方法调用pinyin库的比较函数，然后只需执行下行即可
	  this.site.tags = this.site.tags.sort("pinyin", -100); // -100 这个参数不会被用到，随便填个值即可
}

module.exports = sortTagsByPinyin;
