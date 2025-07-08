const Pet = require('../models/Pet');

exports.getPets = async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
};

exports.adoptPet = async (req, res) => {
  const { id } = req.params;
  await Pet.findByIdAndUpdate(id, { adopted: true });
  res.json({ message: 'Pet adopted' });
};
