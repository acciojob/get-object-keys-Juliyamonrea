//your JS code here. If required.
var student ={
	name :"Kiran"
	
};

Object.prototype.getKeys = function(){
	return Object.keys(this);
};

console.log(student.getKeys());
