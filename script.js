//your JS code here. If required.
let text = document.querySelector("#sizeInfo > h1");
window.onload = function(){
	let width = window.innerWidth;
	let height = window.innerHeight;
	text.textContent=`Width: ${width} and Height: ${height}`
}
window.onresize= function(){
	let width = window.innerWidth;
	let height = window.innerHeight;
	text.textContent=`Width: ${width} and Height: ${height}`
}