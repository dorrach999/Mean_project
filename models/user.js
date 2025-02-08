const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    CompanyID: { type: String, required: true },
    CompanyPosition: {
        type: String,
        enum: ["Consultant", "Team manager", "Product owner", "Business analyst", "Student"],
        required: true,
    },
    JoinDate: { type: Date, required: true },
    Permissions: {
      type: [String], 
      enum: ["Read", "Edit", "Deploy"], 
      required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
