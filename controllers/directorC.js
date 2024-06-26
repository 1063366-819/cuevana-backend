const directorM = require('../models/directorM');


exports.addDirector = async (req, res) => {
    const director = new directorM(req.body);
    await director.save();
    
    res.status(201).json(director);
};


exports.getAllDirectors = async (req, res) => {
    const directors = await directorM.find();

    res.status(201).json(directors);
};

exports.upDirectors = async (req, res) => {
    const idDirectors = req.params.id;
    const updatedData = req.body;
    const updatedDirector = await directorM.findByIdAndUpdate(
        {_id: idDirectors},
        {$set: updatedData},
        {new: true}
    );
    res.status(201).json(updatedDirector);

};

exports.delDirector = async(req, res) => {
    const idDirectors = req.params.id;
    const deletedNombre = await directorM.findByIdAndDelete(
       {_id: idDirectors} 
    );
    res.status(201).json(deletedNombre);

};