import axios from 'axios';
import { fetchToken } from '../lib/handleToken.js'; 

const getToken = async (req, res) => {
    const clientInfo = {
        companyName: "goMart",
        clientID: "8e1cd7f3-cffe-467f-94ca-4d190b496d3d",
        clientSecret: "LlPyMqaHgSwlJFjo",
        ownerName: "Pratik Mohanty",
        ownerEmail: "2105639@kiit.ac.in",
        rollNo: "2105639"
    };
    try {
        const access_token = await fetchToken(clientInfo);
        res.send("Access Token: " + access_token);
        console.log(access_token);
    } catch (error) {
        console.error('Error fetching token:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


 const getTopProducts = async (req, res) => {
    const clientInfo = {
        "companyName": "goMart",
        "clientID": "8e1cd7f3-cffe-467f-94ca-4d190b496d3d",
        "clientSecret": "LlPyMqaHgSwlJFjo",
        "ownerName": "Pratik Mohanty",
        "ownerEmail": "2105639@kiit.ac.in",
        "rollNo": "2105639"
      };
    try {
        
        const { companyname, categoryname } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        // const accessToken = fetchToken(clientInfo) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTUyMzU2LCJpYXQiOjE3MTUxNTIwNTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhlMWNkN2YzLWNmZmUtNDY3Zi05NGNhLTRkMTkwYjQ5NmQzZCIsInN1YiI6IjIxMDU2MzlAa2lpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiOGUxY2Q3ZjMtY2ZmZS00NjdmLTk0Y2EtNGQxOTBiNDk2ZDNkIiwiY2xpZW50U2VjcmV0IjoiTGxQeU1xYUhnU3dsSkZqbyIsIm93bmVyTmFtZSI6IlByYXRpayBNb2hhbnR5Iiwib3duZXJFbWFpbCI6IjIxMDU2MzlAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDU2MzkifQ.rnq9JUL31IjcLbhidoHTglMoCcIDioyDx1WTicJKLH4";
        const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTUyMzU2LCJpYXQiOjE3MTUxNTIwNTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhlMWNkN2YzLWNmZmUtNDY3Zi05NGNhLTRkMTkwYjQ5NmQzZCIsInN1YiI6IjIxMDU2MzlAa2lpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiOGUxY2Q3ZjMtY2ZmZS00NjdmLTk0Y2EtNGQxOTBiNDk2ZDNkIiwiY2xpZW50U2VjcmV0IjoiTGxQeU1xYUhnU3dsSkZqbyIsIm93bmVyTmFtZSI6IlByYXRpayBNb2hhbnR5Iiwib3duZXJFbWFpbCI6IjIxMDU2MzlAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDU2MzkifQ.rnq9JUL31IjcLbhidoHTglMoCcIDioyDx1WTicJKLH4";

        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products`, {
            params: {
                top: top,
                minPrice: minPrice,
                maxPrice: maxPrice
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

 const getProductDetails = async (req, res) => {
    try {
        const { companyname, categoryname, productid } = req.params;

        
        // const accessToken = fetchToken(clientInfo) || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTUyMzU2LCJpYXQiOjE3MTUxNTIwNTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhlMWNkN2YzLWNmZmUtNDY3Zi05NGNhLTRkMTkwYjQ5NmQzZCIsInN1YiI6IjIxMDU2MzlAa2lpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiOGUxY2Q3ZjMtY2ZmZS00NjdmLTk0Y2EtNGQxOTBiNDk2ZDNkIiwiY2xpZW50U2VjcmV0IjoiTGxQeU1xYUhnU3dsSkZqbyIsIm93bmVyTmFtZSI6IlByYXRpayBNb2hhbnR5Iiwib3duZXJFbWFpbCI6IjIxMDU2MzlAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDU2MzkifQ.rnq9JUL31IjcLbhidoHTglMoCcIDioyDx1WTicJKLH4";
        const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTUyMzU2LCJpYXQiOjE3MTUxNTIwNTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhlMWNkN2YzLWNmZmUtNDY3Zi05NGNhLTRkMTkwYjQ5NmQzZCIsInN1YiI6IjIxMDU2MzlAa2lpdC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiOGUxY2Q3ZjMtY2ZmZS00NjdmLTk0Y2EtNGQxOTBiNDk2ZDNkIiwiY2xpZW50U2VjcmV0IjoiTGxQeU1xYUhnU3dsSkZqbyIsIm93bmVyTmFtZSI6IlByYXRpayBNb2hhbnR5Iiwib3duZXJFbWFpbCI6IjIxMDU2MzlAa2lpdC5hYy5pbiIsInJvbGxObyI6IjIxMDU2MzkifQ.rnq9JUL31IjcLbhidoHTglMoCcIDioyDx1WTicJKLH4";
        
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export {getToken, getTopProducts, getProductDetails};