import User from "../../../models/userSchema";
import connectMongo from "../../../utils/connect";
export default async function handler(req, res) {
  connectMongo();
  const { id } = req.query;

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);
        if (!user) {
          res.status(404).json({ message: "User not found" });
          return;
        }

        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "PUT":
      try {
        const user = await User.findById(id);
        if (!user) {
          res.status(404).json({ message: "User not found" });
          return;
        }
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

      break;
    case "DELETE":
      try {
        const user = await User.findById(id);
        if (!user) {
          res.status(404).json({ message: "User not found" });
          return;
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User Deleted" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      break;
  }
}
