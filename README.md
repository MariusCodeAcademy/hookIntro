# Intro into React Hooks (useMemo)

## Context in Class cmp

1. sukurti context file (UserContext)
2. app.jsx naudojam Context.Provider kuriam paduodam reiksmes i value kaip prop
3. faile kuriame norim gauti tas reiksmes naudona Context.Consumer renderyje
4. static contextType jei reikalinga reikme ne renderyje

## Context Practice

0. naujas projektas
1. Sukurti funkcini krepselio komponetna (Cart)
2. Isitrauki i App.jsx
3. App.jsx yra state su hook kuriame bus cart = [{id: 1, title: 'batai', price: 50}...]
4. Susikuriam funckini CartItem
5. generuojam cartItem is Cart
6. susikurti ItemContext.js
7. App.js suteiki konteksta ir i ji paduoti discount reiksme
8. CartItem mes norim gauti App.jsx discount reiksme naudojant context, atvaizduoti nuolaidos reiksme
9. CartItem sukurti mygtuka kuris ivygdo App.jsx esancia applyDiscount funkija
   kuri pritaiko nuolaida visoms prekems
10. CartItem sukurti mygtuka kuris ivygdo App.jsx esancia applySingleDiscount funkija
    kuris pritaiko nuolaida tik tai prekei
