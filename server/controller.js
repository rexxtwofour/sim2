module.exports = {

gethouses:( req, res, next ) => {
    const dbInstance =req.app.get('db');
    dbInstance.get_houses().then(houses => {
        if(houses) res.status(200).json({houses});
        else res.status(200).json({houses: ['houses were not found']})
    })
},
gethouse:( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.get_house(id)
    .then(house => {
        res.status(200).json({house});
    })
    
},

createhouse:( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { titleinput, nameinput, addressinput, cityinput, stateinput, zipinput, image_urlinput, mortgage_amountinput, monthly_rentinput } =req.body

    dbInstance.createhouse([title, nameinput, addressinput, cityinput, stateinput, zipinput, image_urlinput, mortgage_amountinput, monthly_rentinput])
    .then( () => res.status(200) )
    .catch( err => {
        res.status(500).send({err: "There was a create issue"});
    });

},
edithouse:( req, res, next ) => {
    const{ title, nameinput, addressinput, cityinput, stateinput, zipinput, image_urlinput, mortgage_amountinput, monthly_rentinput }= req.body
    const updatehouse = { titleinput, nameinput, addressinput, cityinput, stateinput, zipinput, image_urlinput, mortgage_amountinput, monthly_rentinput };

    const dbInstance = req.app.get('db');
    dbInstance.edithouse(updatedhouse)
    .then (house => res.status(200).json({house}) )
    .catch( err => {
        res.status(500).send({err: "There was an edit issue"});
    });
},



deletehouse:( req, res, next ) => {
    const { id }= req.params;
    const dbInstance = req.app.get('db');

dbInstance.deletehouse(id).then(() => {
    res.status(200).json({message: 'House has been deleted'});
}).catch( err => console.log('There was a delete issue',err));
    
}
}



