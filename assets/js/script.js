var nbCommentMesange = 0;
/*AfficheNbComment(1);*/

/* affichage d'un texte dans l'élément id */
function afficheTexte(texte, id){
	document.getElementById(id).innerHTML = texte;
}

function comment(elt){
	var nId = "id"+elt.id.toString();
	var textnId = "text"+elt.id.toString();
	var commentnId = "ul"+elt.id.toString();
	var errnId = "err"+elt.id.toString();

	if (document.getElementById(textnId).value != ""){
		nbCommentMesange++;
		document.getElementById(commentnId).innerHTML += "<li>" + document.getElementById(textnId).value + "</li>";
		document.getElementById(textnId).value = "";
		document.getElementById(errnId).style.color = "black";
		document.getElementById(nId).innerHTML =  nbCommentMesange.toString() + " commentaire(s)";
	}else{
		document.getElementById(errnId).style.color = "red";
	}


}

function AfficheNbComment(numid){
	console.log(nbCommentMesange);
	var nId = "id"+numid.toString();
	document.getElementById(nId).innerHTML =  nbCommentMesange.toString() + " commentaires";

}








