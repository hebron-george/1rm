function appendHtml(el, str) {
  // var div = document.createElement('div');
  // div.innerHTML = str;
  // while (div.children.length > 0) {
  //   el.appendChild(div.children[0]);
  // }

  el.innerHTML += str;
}
function calculatePercents() {
	var oneRM = parseInt(document.getElementById("1rm").value);
	if (oneRM != NaN){
		document.getElementById("50p").firstChild.innerHTML = "50% = " + (oneRM * 0.5).toFixed(2);
		document.getElementById("60p").firstChild.innerHTML = "60% = " + (oneRM * 0.6).toFixed(2);
		document.getElementById("70p").firstChild.innerHTML = "70% = " + (oneRM * 0.7).toFixed(2);
		document.getElementById("80p").firstChild.innerHTML = "80% = " + (oneRM * 0.8).toFixed(2);
		document.getElementById("85p").firstChild.innerHTML = "85% = " + (oneRM * 0.85).toFixed(2);
		document.getElementById("90p").firstChild.innerHTML = "90% = " + (oneRM * 0.9).toFixed(2);
		document.getElementById("95p").firstChild.innerHTML = "95% = " + (oneRM * 0.95).toFixed(2);
		document.getElementById("101p").firstChild.innerHTML = "101% = " + (oneRM * 1.01).toFixed(2);
		document.getElementById("102p").firstChild.innerHTML = "102% = " + (oneRM * 1.02).toFixed(2);
		document.getElementById("103p").firstChild.innerHTML = "103% = " + (oneRM * 1.03).toFixed(2);
		document.getElementById("104p").firstChild.innerHTML = "104% = " + (oneRM * 1.04).toFixed(2);
		document.getElementById("105p").firstChild.innerHTML = "105% = " + (oneRM * 1.05).toFixed(2);
	}
	else {
		alert('Gimme a number!');
	}
}
/* Header */
if (navigator.userAgent.indexOf("Mobile") != -1) {
	// Mobile version
	//Insert <head> stuff for mobile
	appendHtml(document.head, '<meta name="viewport" content="width=device-width, initial-scale=1">');
	appendHtml(document.head, '<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.css">');
	appendHtml(document.head, '<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>');
	appendHtml(document.head, '<script src="http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js"></script>');
} else {
	// Desktop version
}
/* Body */
function init(){
	if (navigator.userAgent.indexOf("Mobile") != -1) {
		// Mobile version	
		appendHtml(document.body, '<div data-role="page">');

		appendHtml(document.body, '<div data-role="header"><h1>1-RM Calculator</h1>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<input type="text" name="1rm" id="1rm"><br><input type="submit" value="Submit" onclick="calculatePercents()">');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="50p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="60p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="70p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="80p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="85p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="90p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="95p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="101p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="102p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="103p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="104p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="105p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="main" class="ui-content" id="110p"><p></p>');
		appendHtml(document.body, '</div>');

		appendHtml(document.body, '<div data-role="footer"><h1>Hebron George &copy;</h1>');
		appendHtml(document.body, '</div>');
	} else {
		// Desktop version

		appendHtml(document.body, '<div> <p>Only the mobile version of this page is available right now.</p> </div>');
	}
};
