const express = require('express');
const router = express.Router();
const HeroImage = require('../../models/heroImage');

//create a hero image
router.post(`/store/heroimage/create`,  (req, res) => {

    try {

        const heroImage = new HeroImage({
            image: req.body.image
        });

        heroImage.save();
        
        return res.send(heroImage);

    } catch(ex) {
        console.log(ex);
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


//get a hero image by id
router.get(`/store/heroimage/:id`, async (req, res) => {
    try{
        
        const heroImage = await HeroImage.findById(req.params.id);

        if(!heroImage){

            return res.status(400).send(`The product with id "${req.params.id}" does not exist`)
        }
        
        return res.send(heroImage);


    } catch (ex) {
        console.log(ex);
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//update a hero image
router.put(`/store/heroimage/update/:id`, (req, res) => {
    try{
        const id = req.params.id;
        const updatedImage = req.body;

        result = HeroImage.findByIdAndUpdate(id, updatedImage)
        .then(()=> {
            res.status(200).json({
                message: 'HeroImage has been updated!'
            });
        });

        res.send(result);
    } catch (ex) {
        console.log(ex);
        return res.status(500).send(`Internal Server Error ${ex}`);
    }
});

module.exports = router;