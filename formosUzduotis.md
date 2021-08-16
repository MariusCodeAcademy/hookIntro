## Sunkesne uzduotis atlikusiems visas iki siol paduotas uzduotis

1. sukurti user registracijos forma
2. username, email, password, repeatPassword
3. username - leisti tik raides ir tarpus, negali buti tuscias ir trumpesins nei 4 simboliai
4. email - ne tuscias, ir normalus email
5. password - min 6 simboliai, turi buti bent vienas skaicius ir Didzioji raide
6. repeatPassword - sutapti su password
7. formai atsiradus Userio sukurimo mygtukas yra isjungtas(disabled)
8. teisingai viska suvedus
   8.1 paslepiam forma
   8.2 rodome userPage componenta kuriame yra logout mygtukas ir username su email
   8.3 issaugom userio informacija state
   8.4 issaugom userion name, email sesijos kintamajame kad perkrovus vis dar butume prisilogine
9. logout mygtukas islogina mus, pakeiciam state ir sesija.
