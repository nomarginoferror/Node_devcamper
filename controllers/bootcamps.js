const Bootcamp = require('../Models/Bootcamp');

// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc        Get single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

// @desc        Create a bootcamp
// @route       POST /api/v1/bootcamp
// @access      Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc        Edit a bootcamp
// @route       PUT /api/v1/bootcamp/:id
// @access      Private
exports.editBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Edit bootcamp ${req.params.id}` });
};

// @desc        Delete a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};