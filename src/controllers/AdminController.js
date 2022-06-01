import Rule from "../model/RuleModel.js";

class AdminController {
  async createRule(req, res) {
    const {
      dailyValue,
      exceededHourValue,
      fixedTime,
      fixedTimeValue,
      gracePeriod,
      monthlyValue,
    } = req.body;

    await Rule.create({
      dailyValue,
      exceededHourValue,
      fixedTime,
      fixedTimeValue,
      gracePeriod,
      monthlyValue,
    });

    return res.json();
  }

  async getRules(req, res) {
    const rules = await Rule.find();
    return res.json(rules);
  }

  async deleteRules(req, res) {
    const deleteRules = await Rule.deleteMany();
    return res.json(deleteRules);
  }
}

export default new AdminController();
