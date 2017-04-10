var regModel = {
	float: /^\d+(\.\d+)?$/g, 	//只能匹配数字和小数
	int: /^\d+$/,							//整数
	tel: /^1[0-9]{10}$/,			//简化验证手机
	test: function(reg, val){
		var result = this[reg].test(val);
		this.float.lastIndex = 0;
		return result;
	}
};
