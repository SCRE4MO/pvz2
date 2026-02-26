// main.js - remover anúncios

document.addEventListener("DOMContentLoaded", () => {

  function removeAds() {
    // Remove divs laterais
    const ad1 = document.getElementById("sidebarad1");
    const ad2 = document.getElementById("sidebarad2");

    if (ad1) ad1.remove();
    if (ad2) ad2.remove();

    // Remove iframes de anúncios
    document.querySelectorAll("iframe").forEach(iframe => {
      const src = iframe.src || "";
      if (
        src.includes("ads") ||
        src.includes("doubleclick") ||
        src.includes("googlesyndication") ||
        src.includes("fundingchoices")
      ) {
        iframe.remove();
      }
    });

    console.log("Ads removidos");
  }

  // Executa ao carregar
  removeAds();

  // Executa de novo a cada 2 segundos (caso eles reapareçam)
  setInterval(removeAds, 2000);

});