
const getRequest = (req, res) => {
    const { companyName, clientID, clientSecret, ownerName, ownerEmail, rollNo } = req.body;
    console.log("companyName:", companyName);
    console.log("clientID:", clientID);
    console.log("clientSecret:", clientSecret);
    console.log("ownerName:", ownerName);
    console.log("ownerEmail:", ownerEmail);
    console.log("rollNo:", rollNo);
    
    const accessToken = "JKB786tgH98hion8H&n98NUU9u90u97y"; 
    res.json({ access_token: accessToken });
};

export { getRequest };
