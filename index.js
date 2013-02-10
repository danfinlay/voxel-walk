exports.render = function(skin, time){
	skin.head.rotation.y = Math.sin(time*1.5)/3;
	skin.head.rotation.z = Math.sin(time)/2;
	
	skin.rightArm.rotation.z = 2 * Math.cos(0.6662 * time*10 + Math.PI);
	skin.rightArm.rotation.x = 1 * (Math.cos(0.2812 * time*10) - 1);
	skin.leftArm.rotation.z = 2 * Math.cos(0.6662 * time*10);
	skin.leftArm.rotation.x = 1 * (Math.cos(0.2312 * time*10) + 1);
	
	skin.rightLeg.rotation.z = 1.4 * Math.cos(0.6662 * time*10);
	skin.leftLeg.rotation.z = 1.4 * Math.cos(0.6662 * time*10 + Math.PI);
};