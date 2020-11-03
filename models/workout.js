const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    //Insert your data fields here

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;