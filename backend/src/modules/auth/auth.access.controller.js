const customerAcess = (req, res) => {
 return res.status(200).json({
  success: true,
  message: "customer access granted",
  data: {
   user: req.user
  }
 })
}
const artisticAcess = (req, res) => {
 return res.status(200).json({
  success: true,
  message: "artist access granted",
  data: {
   user: req.user
  }
 })
}
const adminAcess = (req, res) => {
 return res.status(200).json({
  success: true,
  message: "admin access granted",
  data: { user: req.user }
 })
}
module.exports = {
 customerAcess,
 artisticAcess,
 adminAcess
}