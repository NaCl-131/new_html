var i = 0;

function search() {
	var a = document.getElementById("baidu"); //获取输入
	var G = a.value;
	if (G != false) {

		switch (i) {
			case 0:
				window.location.href = 'https://www.baidu.com/s?wd=' + G;
				break;
			case 1:
				window.location.href = 'https://www.google.com/search?q=' + G;
				break;
			case 2:
				window.location.href = 'https://cn.bing.com/search?q=' + G;
				break;
		}
	} else {
		a.style.animation = "shake 0.2s linear 0s 2";
		setTimeout(function() {
			a.style.animation = "none";
		}, 500); //用于重复触发
	}
}

function enter() {
	if (event.keyCode == 13) {
		search();
	}
}

function change() {
	var p = document.getElementById("pic");
	if (i != 3) {
		i++;
	}
	if (i == 1) {
		p.src = "./img/google.png";
	}
	if (i == 2) {
		p.src = "./img/bing.png"
	}
	if (i == 3) {
		p.src = "./img/baidu.png"
		i = 0;
	}
}
