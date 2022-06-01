import mongoose from "mongoose";

const RuleSchema = mongoose.Schema({
  dailyValue: String,
  exceededHourValue: String,
  fixedTime: String,
  fixedTimeValue: String,
  gracePeriod: String,
  monthlyValue: String,
});

export default mongoose.model("Rule", RuleSchema);
