const db = require('../models');

//Create a bike
exports.createBike = async (req, res) => {
    try {
        let newBike = await db.Bike.create(req.body);
        console.log(newBike);
        return res.status(200).json({
            message: 'Nouveau vélo créée avec succès !',
            newBike
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! On a pas pu créer ton vélo',
            error: err
        });
    }
};

//Get all bikes
exports.getAllBikes = async (req, res) => {
    try {
        if (req.query.brand)
        {
            var bikes = await db.Bike.find({"brand": req.query.brand});
        }
        else {
            var bikes = await db.Bike.find();
        }
        return res.status(200).json(bikes);
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not find your bikes',
            error: err
        });
    }
};

//Get one bike
exports.getOneBike = async (req, res) => {
    try {
        let thisBike = await db.Bike.findById(req.params.id);
        return res.status(200).json(thisBike);
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not find your bikes',
            error: err
        });
    }
};

//Update one bike
exports.updateOneBike = async (req, res) => {
    try {
        let bikeToUpdate = await db.Bike.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json({
            message: 'Youpi vélo bien modifié!',
            bikeToUpdate
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not modify your bikes',
            error: err
        });
    }
};

//Delete one bike
exports.deleteOneBike = async (req, res) => {
    try {
        await db.Bike.findByIdAndRemove(req.params.id);
        return res.status(200).json('Bike deleted !');
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not delete your bikes',
            error: err
        });
    }
};

exports.getElectricBikes = async (req, res) => {
    try {
        let thisBike = await db.Bike.find({"brand" : req.params.brand});
        return res.status(200).json(thisBike);
    } catch (err) {
        return res.status(400).json({
            message: 'Oups! Could not find your bikes',
            error: err
        });
    }
};