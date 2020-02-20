const Seat = require('../models/seat.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Seat.find());
  }
  catch(err) {
    res.status(500).json(err); 
  }
}

exports.getRandom = async (req, res) => {
  try {
    const count = await Seat.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const dep = await Seat.findOne().skip(rand);
    if(!dep) res.status(404).json({message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.json(err);
  }
}

exports.getOne = async (req, res) => {
  try {
    const dep = await Seat.findById(req.params.id);
    if(!dep) res.status(404).json({message: 'Not found'})
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json(err);
  }
}

exports.postOne = async (req, res) => {
  try {
    const { name } = req.body;
    const newSeat = new Seat({name: name});
    await newSeat.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json(err);
  }
}

exports.putOne = async (req, res) => {
  try {
    const { name } = req.body;
    const dep = await(Seat.findById(req.params.id));
    if (dep) {
      dep.name = name;
      await (dep.save());
      res.json(await Seat.find());
    } else res.status(404).json({ message: 'Not found'});
  }
  catch(err) {
    res.status(500).json(err);
  };
}

exports.deleteOne = async (req, res) => {
  try {
    const dep = await(Seat.findById(req.params.id));
    if(dep) {
      await Seat.deleteOne({ _id: req.params.id });
      res.json(await Seat.find());
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
}