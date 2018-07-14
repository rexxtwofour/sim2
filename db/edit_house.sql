UPDATE houser_houses (
    SET
    name = ${nameinput} ,
    address =${addressinput},
    city = ${cityinput},
    state = ${stateinput},
    zip = ${zipinput},
    image_url = ${image_urlinput},
    mortgage_amount = ${mortgage_amountinput},
    monthly_rent =${monthly_rentinput} 
);

SELECT * FROM houser_houses WHERE id = ${id};