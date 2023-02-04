var conteudo = "";
var thais = "thais rodrigues pacheco";
var thais2 = "Thais Rodrigues Pacheco";


function chamar (){

    conteudo = document.getElementById('nome').value;

    
    if(conteudo==thais || conteudo==thais2){
        document.getElementById('digito').innerHTML = "EU TE AMO MUITOO MEU AMOR";
    }else{
        document.getElementById('digito').innerHTML = "";
        alert("QUEM É VOCÊ SUA VAGABUNDA? NÃO É MINHA MULHER!");
        this.conteudo = "";
        document.getElementById('nome').innerHTML = conteudo;
    }   
    
}
