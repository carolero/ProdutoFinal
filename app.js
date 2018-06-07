var palavra = prompt("Insira uma palavra para codificar")

function cipher(mensagem, posi) {
  var encrypted = '';
  var current, charCode, displace;

  for(var i=0; i<mensagem.length; i++) {
    current = mensagem.charAt(i);
    charCode = current.charCodeAt(0);

    if(charCode >= 97 && charCode <=122) {
      charCode -= 32;
    }
    if(charCode < 65 || charCode > 90) {
      encrypted += current;
    } else {
      displace = Math.abs((charCode-65+posi))%26;
      charCode = 65 + displace;
      encrypted += String.fromCharCode(charCode);
    }
  }
  return encrypted;
  document.getElementsByClassName("um")[0].innerHTML = "Sua palavra criptada é " + encrypted;
}

console.log(cipher(palavra,7));
