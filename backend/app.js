// https://www.npmjs.com/package/zeptomail

// For ES6
import { SendMailClient } from "zeptomail";

// For CommonJS
// var { SendMailClient } = require("zeptomail");

const url = "api.zeptomail.com/";
const token = "Zoho-enczapikey wSsVR60nrkPzWv99njOpLuwxnQ8EAlmjFxl7iQGn7H78G6qU8cdqwhWaU1X0H/FLGTI9ETQS9bsukUgA0GUOid5/zllUDCiF9mqRe1U4J3x17qnvhDzNXm5fkhaOKosKxwlqmmNmG88k+g==";

let client = new SendMailClient({url, token});

client.sendMail({
    "bounce_address": "bouncetestmail@test.krishnamurthy.pro",
    "from": 
    {
        "address": "noreply@krishnamurthy.pro",
        "name": "noreply"
    },
    "to": 
    [
        {
        "email_address": 
            {
                "address": "200701131@rajalakshmi.edu.in",
                "name": "Mustafa Abdullahbhai Khorakiwala"
            }
        }
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b>Hello Mustafa, I found a way to send emails without any limit! 50,000 mails will cost you only Rs750! Give me a call when you find this email.</b></div>",
}).then((resp) => console.log("success")).catch((error) => console.log("error")); 