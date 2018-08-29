document.addEventListener('DOMContentLoaded', function() {
    var translateButton = document.getElementById('translate');
    var copyButton = document.getElementById('copy');
    var text = document.getElementById('text');
    translateButton.addEventListener('click', function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              translatedText = JSON.parse(this.responseText);
              translatedText = translatedText[0][0][0];
              text.value = translatedText;
          }
        };
      var sourceLang = 'auto';
      var targetLang = 'de';
      var sourceText = text.value;
      var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
      xhttp.open("GET", url, true);
      xhttp.send();
    }, false);
    copyButton.addEventListener('click', function(){
      text.select();
      document.execCommand('copy');
    });
}, false);