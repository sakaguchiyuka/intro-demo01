
#pragma strict

//外部のサウンドGameObjectと紐づけるため用
var target : GameObject;
var index = 0;

//サウンドデータのgain取ってくるためのバッファ
private var buffer = new float[44100 / 60];
private var source : AudioSource;


//外部で調整するための変数
var speed : float = 5;
var force : float = 5;
var Level : float = 3;

function Start() {
	source = target.GetComponents.<AudioSource>()[0];
}

function Update() {
	source.GetOutputData(buffer, 0);

	var rms = 0.0;
	for (var level in buffer) {
		rms += level * level;
	}
	rms = Mathf.Sqrt(rms / buffer.Length);

	var dbScale = 0.5 * (2.0 + Mathf.Log10(rms));
	transform.localScale = Vector3.one * Mathf.Clamp01(dbScale);
  var t : float = Time.time * speed;
  
  //回転させる
  transform.Rotate(Vector3.right,    Mathf.Sin(t * 0.8) * force);
  transform.Rotate(Vector3.up,       Mathf.Cos(t * 0.9) * -force);
  transform.Rotate(Vector3.forward,  Mathf.Sin(t * 1.1) * force);
}
