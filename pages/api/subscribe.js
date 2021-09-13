import axios from "axios"
function Req(email) {
// Creating API Key: mailchimp.com/developer/marketing/guides/quick-start/
const API_KEY = "cc37b4f7e3a772de35998f68f42b3758";
//Find your ID: mailchimp.com/help/find-audience-id/
const AUDIENCE_ID = "a930057a27"
const DATACENTER = "us15";
const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`
const data = {
  email_address: email,
  status: "subscribed",
}
const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64")
const headers = {
   "Content-Type": "application/json",
   Authorization: `Basic ${base64ApiKey}`,
}
return {
  url,
  data,
  headers,
  }
}
export default async (req, res) => {
   const { email } = req.body
   if (!email || !email.length) {
     return res.status(400).json({
       error: "Forgot to submit your email address?",
   })}
try {
   const { url, data, headers } = Req(email)
   const response = await axios.post(url, data, { headers })
   return res.status(201).json({ error: null })
} catch (error) {
  return res.status(400).json({
     error: `Please enter a valid email address.`,
  })
 }
}