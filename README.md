<!--
TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

-->

<!--
ACQUISIRE I DATI CHE CI SERVONO IN INPUT DALL'UTENTE
-->
-Creare una variabile che permetta di salvare l'input dato dall'utente per il numero di chilometri
--Creare una variabile che permetta di salvare l'input dato dall'utente per l'età del passeggero
---Chiedere all'utente di inserire questi due input

<!--
RENDERE I DATI UTILIZZABILI
-->
-Trasformare gli input degli utenti in valori numerici con cui possiamo lavorare

<!--
CALCOLARE IL TOTALE DEL BIGLIETTO
-->
-Creare una costante su cui segniamo il prezzo PER OGNI km
--Creare una variabile per il totale dei biglietto senza nessuno sconto
---Calcolare il prezzo del biglietto in base al numero dei chilometri inserito dall'utente

<!--
APPLICARE GLI SCONTI
-->
-Creare una variabile per lo sconto applicato ai minorenni
--Creare una variabile per lo sconto applicato agli over 65
---Controllare l'input di età che hanno inserito gli utenti
    -SE è <18
        -Sovrascriviamo la variabile del totale e la sostituiamo con {totale - [(totale / 100) * 20]}
    -ELSE SE è >65
        --Sovrascriviamo la variabile del totale e la sostituiamo con {totale - [(totale / 100) * 40]}

<!--
METTIAMO IL RISULTATO NELLA GIUSTA FORMA E LO FACCIAMO VISUALIZZARE
-->
-Utilizziamo il metodo toFixed(2) per far stampare il totale con i giusti decimali <!--nomeVariabile.toFixed(2);--> 