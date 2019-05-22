var nbComments = 0;
afficheCommentaires();

/* affichage d'un texte dans l'élément id */
function afficheTexte(texte, id) {
	document.getElementById(id).innerHTML = texte;
}

function comment(elt) {
	var nId = "id" + elt.id.toString();
	var textnId = "text" + elt.id.toString();
	var commentnId = "ul" + elt.id.toString();
	var errnId = "err" + elt.id.toString();

	if (document.getElementById(textnId).value != "") {
		nbComments++;
		document.getElementById(commentnId).innerHTML += "<li>" + document.getElementById(textnId).value + "</li>";
		ajouteCommentaire(document.getElementById(textnId).value);
		document.getElementById(textnId).value = "";
		document.getElementById(errnId).style.color = "black";
		document.getElementById(nId).innerHTML = nbComments.toString() + " commentaire(s)";
	} else {
		document.getElementById(errnId).style.color = "red";
	}


}

function AfficheNbComment(numid) {
	console.log(nbComments);
	var nId = "id" + numid.toString();
	document.getElementById(nId).innerHTML = nbCommentMesange.toString() + " commentaires";

}


function ajouteCommentaire(texte) {
	var gNotifications = [];
	var comment = document.location.href.split("/").pop();
	comment = comment.split(".")[0];

	if (sessionStorage.getItem(comment) == null) {
		sessionStorage.setItem(comment, "");
	}
	if (sessionStorage.getItem(comment).length > 0) {
		gNotifications = JSON.parse(sessionStorage.getItem(comment));
	} else {
		gNotifications.length = 0;
	}
	gNotifications.push(texte);
	sessionStorage.setItem(comment, JSON.stringify(gNotifications));

}

function afficheCommentaires() {
	nbComments = 0;
	var gNotifications = [];
	var comment = document.location.href.split("/").pop();
	comment = comment.split(".")[0];
	if (sessionStorage) {
		if (sessionStorage.getItem(comment) != null) {
			if (sessionStorage.getItem(comment).length > 0) {
				gNotifications = JSON.parse(sessionStorage.getItem(comment));
				for (var i = 0; i < gNotifications.length; i++) {
					nbComments++;
					document.getElementById("ul1").innerHTML += "<li>" + gNotifications[i] + "</li>";
				}
			}

		}

	}
}


function recherche() {
	var text = document.getElementById("search_button").value;
	var listElt = document.getElementsByClassName("corps");
	var str = document.querySelectorAll('h2');
	for (var i = 0; i < str.length; i++) {
		console.log(str[i].innerText.indexOf(text));
		if (str[i].innerText.indexOf(text) >= 0) {
			str[i].style.color = "red";
		} else {
			str[i].style.color = "black";

		}
	}
}