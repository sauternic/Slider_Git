/*var NameSpace_NicolasSlider = NameSpace_NicolasSlider || {};

//Funktions Scope Erzeugen und Ausführen: (function(){...})()
//Am Ende öffentliche API mit 'return + Objektliteral'
NameSpace_NicolasSlider.Modul1 = (function () {
    'use strict';
    window.onerror = function (e) { alert(e); };

    var mar_bor_pad;
    function geladen() {
        //Style Eigenschaften auslesen:
        var slider1_styles = window.getComputedStyle(slider1);
        var slider1_styles_margin = parseInt(slider1_styles.marginLeft, 10);
        var slider1_styles_border = parseInt(slider1_styles.borderLeftWidth, 10);
        var slider1_styles_padding = parseInt(slider1_styles.paddingLeft, 10);
        //Addieren von Margin + Border + Padding für screenX
        mar_bor_pad = slider1_styles_margin + slider1_styles_border + slider1_styles_padding;

        //Events registieren
        slider1.addEventListener('dragstart', function (e) { e.preventDefault() }, false);
        slider1.addEventListener('mousedown', mouseMove, false);
        slider1.addEventListener('mousemove', mouseMove, false);
    }

    var AktuellX;
    var slider1_event = {};
    function mouseMove(e) {
        //Nur wenn left Button gedrückt
        if (e.buttons === 1) {
            //Auslesen der Position der Maus von linkem Rand des Parent Node
            // Wäre optimal wenn es nicht Flackern würde im Fire Fox :(((
            AktuellX = e.offsetX;

            //Minus halbe Breite von regler1 für Cursor in der Mitte
            AktuellX -= 10;

            //Anschlag Unten + Oben!
            if (AktuellX < 0) AktuellX = 0;
            if (AktuellX > 1780) AktuellX = 1780;

            reglerWert();

            //RegelKnopf Position
            regler1.setAttribute('x', AktuellX);
            //Position text1-Feld (relativ)
            text1.style.left = mar_bor_pad + AktuellX + 'px';
        }
    }

    //slider1 oberer Wert
    var obererWert = 90;
    function reglerWert() {
        var wert = AktuellX / (1780 / obererWert);
        text1.value = wert;

        //Callback/Event nicht Objekt-Orientiert!:
        // Mit if nicht möglich da statt 'false' -> 
        // 'Referenz Error' wenn nicht vorhanden :(((
        try {
            //Diese Funktion ist im HTML Definiert!
            //Mann kommt ohne Probleme raus!! :)
            change_slider1(wert);
        } catch (error) { }


        //Drehen des Rechtecks um seine Mitte
        rect1.setAttribute('transform', 'rotate(' + wert + ',750,350)')
    }



    //öffentliche Schnittstelle: 'return + Objektliteral'
    return {
        'geladen': geladen,
        'slider1_event': slider1_event
    }
})();*/



