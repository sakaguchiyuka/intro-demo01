#pragma strict

function Start () {

}

//外部で調整するための変数
var speed : float = 5;
var force : float = 5;

function Update () {
  var t : float = Time.time * speed;
  
  //回転させる
  transform.Rotate(Vector3.right,    Mathf.Sin(t * 0.8) * force);
  transform.Rotate(Vector3.up,       Mathf.Cos(t * 0.9) * -force);
  transform.Rotate(Vector3.forward,  Mathf.Sin(t * 1.1) * force);
}


