
#pragma strict

//�O���̃T�E���hGameObject�ƕR�Â��邽�ߗp
var target : GameObject;
var index = 0;

//�T�E���h�f�[�^��gain����Ă��邽�߂̃o�b�t�@
private var buffer = new float[44100 / 60];
private var source : AudioSource;


//�O���Œ������邽�߂̕ϐ�
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
  
  //��]������
  transform.Rotate(Vector3.right,    Mathf.Sin(t * 0.8) * force);
  transform.Rotate(Vector3.up,       Mathf.Cos(t * 0.9) * -force);
  transform.Rotate(Vector3.forward,  Mathf.Sin(t * 1.1) * force);
}
