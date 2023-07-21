const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <div class="topnav" id="myTopnav">

    <nav><a href="index.html">Home</a></nav>
     
      <div class="dropdown">
        <button class="dropbtn">Quran</button>
        <div class="dropdown-content">
          <a href="surah-al-fatihah.html">Surah Al Fatihah</a>
          <a href="divine-speech.html">Divine Speech</a>
        </div>
      </div> 

      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
    </div>
    `;
}

createNav();
