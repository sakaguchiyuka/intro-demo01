#pragma strict


//ŠO•”‚Å’²®‚·‚é‚½‚ß‚Ì•Ï”
var speed      : float = 0.05;
var start_xpos : float = 5;
var wrapped    : float = -20;

function Start() {
}


function Update () {
  transform.position.x -= speed;
  if(transform.position.x < wrapped) {
    transform.position.x = start_xpos;
  }
  transform.position.y = Mathf.Cos(0.2 * transform.position.x * 2 * Mathf.PI) * 0.5;
}


