const footerComponent = document.querySelector('#footer_component');
footerComponent.innerHTML = `<footer class="footer">
<div class="container">
    <div class="footer-body">

        <div class="footer-contact">
            <p><a class="footer-contact__link" target="_blank" href="./pages/contact.html">Contact</a></p>
            <p>
                BUDON LIMITED LIABILITY COMPANY
                UL. JOHN HEWELIUSZ 11/811, 80-890 GDANSK
            </p>
        </div>

        <div class="footer-emails">
            <a class="footer-link" href="mailto:spz.budon@gmail.com" data-eng="spz.budon@gmail.com - for info" data-france="spz.budon@gmail.com - pour information" data-netherlands="spz.budon@gmail.com - voor info"></a>
            <a class="footer-link" href="mailto:sp.budon@wp.pl" data-eng="sp.budon@wp.pl - for bills" data-france="sp.budon@wp.pl - pour les factures" data-netherlands="sp.budon@wp.pl - voor rekeningen"></a>
        </div>                

    </div>

</div>

</footer>`