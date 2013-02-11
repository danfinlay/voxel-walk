var walkSpeed = 1.0
var startedWalking = 0.0
var stoppedWalking = 0.0
var walking = false
var acceleration = 1.0

exports.render = function(skin, time){

	if(walking && time<startedWalking+acceleration){
		walkSpeed = (time-startedWalking)/acceleration
	}
	if(!walking && time<stoppedWalking+acceleration){
		walkSpeed = -1/acceleration * (time-stoppedWalking) + 1
	}

	skin.head.rotation.y = Math.sin(time*1.5)/3 * walkSpeed
	skin.head.rotation.z = Math.sin(time)/2 * walkSpeed
	
	skin.rightArm.rotation.z = 2 * Math.cos(0.6662 * time*10 + Math.PI) * walkSpeed
	skin.rightArm.rotation.x = 1 * (Math.cos(0.2812 * time*10) - 1) * walkSpeed
	skin.leftArm.rotation.z = 2 * Math.cos(0.6662 * time*10) * walkSpeed
	skin.leftArm.rotation.x = 1 * (Math.cos(0.2312 * time*10) + 1) * walkSpeed
	
	skin.rightLeg.rotation.z = 1.4 * Math.cos(0.6662 * time*10) * walkSpeed
	skin.leftLeg.rotation.z = 1.4 * Math.cos(0.6662 * time*10 + Math.PI) * walkSpeed
}

exports.startWalking = function(){
	walking = true
	startedWalking = Date.now()/1000
}
exports.stopWalking = function(){
	walking = false
	stoppedWalking = Date.now()/1000
}
exports.isWalking = function(){
	return walking
}

exports.acceleration = acceleration