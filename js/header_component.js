const headerComponent = document.querySelector('#header_component');

headerComponent.innerHTML = `<header>
    <div class="container">
    <div class="header-body">

        <div>
            <a class="header-logo" href="./index.html">BUDON.INFO</a>
        </div>

        <nav class="header-navigation">

            <div class="burger-menu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </div>

            <div class="header-wrapper">

            <ul class="header-nav">
                <li><a class="header-nav__li" data-eng="over us" data-france="sur nous" data-netherlands="over ons"  href="./index.html"></a></li>                  
                <li><a class="header-nav__li" href="./contact.html">Contact</a></li> 
                <li><a class="header-nav__li mr-30px" data-eng="Add-some ENG" data-france="Add-some FRA" data-netherlands="Add-some NTH" href="./index.html"></a></li>
            </ul>

            <div>
                <ul class="header-langs">
                    <li id="lang-logo"><img src="../assets/img/lang_logo.png" alt="lang-logo"></li>
                    <div class="header-langs__additional">
                    <li id="english" class="header-lang__toggle">English <img src="../assets/img/english.png" alt="english"></li>
                    <li id="france" class="header-lang__toggle">France <img src="../assets/img/france.png" alt="france"></li>
                    <li id="netherlands" class="header-lang__toggle"">Netherlands<img src="../assets/img/netherlands.png" alt="netherlands"></li>
                    </div>
                </ul>
            </div>
        </nav>
        </div>
        
    </div>
</div>
</header>`


