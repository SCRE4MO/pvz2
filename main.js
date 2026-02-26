// main.js - remover ads sem quebrar o som

document.addEventListener("DOMContentLoaded", () => {

  function removeAds() {

    // remove sidebar ads
    const ad1 = document.getElementById("sidebarad1");
    const ad2 = document.getElementById("sidebarad2");

    if (ad1) ad1.remove();
    if (ad2) ad2.remove();

    // remove apenas iframes de propaganda
    document.querySelectorAll("iframe").forEach(iframe => {
      const src = iframe.src || "";

      if (
        src.includes("doubleclick") ||
        src.includes("googlesyndication") ||
        src.includes("fundingchoices") ||
        src.includes("adsystem")
      ) {
        iframe.remove();
      }
    });

  }

  removeAds();
  setInterval(removeAds, 2000);

});