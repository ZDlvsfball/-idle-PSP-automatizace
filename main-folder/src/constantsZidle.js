


//konstanty pro přihlášení do aplikace židle
const zidleLoginPage = 'https://adfs.psp.cz/adfs/ls/?SAMLRequest=lZJNb8IwDIbv%2FAqUe0lbYOsiQGKwDyQGCNgOu0ymDRCpTbrY3devX9qOse2ANF9i2X4f%2BbXSQ8jSXAwL2uulfC4kUqPp4i1LNYqq2WeF1cIAKhQaMomCYrEa3k1F2PJFbg2Z2KTsj%2By0ChClJWV0LZuM%2B2w%2Bu5rObyazp6Db7cCZL6MwDC6gs4mgve3GHZdE7vFl%2B3wb%2B0k3qqUP0qLj9JnDskZNQyzkRCOBJlf3w7YXBF7QWQe%2BCCPhtx9r6diZVRqoku%2BJchScQ7LFVo55K%2F6ocp4ir8cXX04vlU6U3p02uKmHUNyu1wtvMV%2Bta8jwYHxkNBaZtCtpX1Qs75fT4w4UeBkkkB32SM2u3NNYD3LFy%2BuG3LU4xMgGFbZXFkVl3A7%2Bi8kkuTGCHv9JOXJzMXP%2BJuOFSVX8XtXLuDY2Azp9hrKiEm9bjQqyoFFJTewbMkxT8zqyEkj2GdlCsiYfNOpNfn%2FLwSc%3D&RelayState=https%3A%2F%2Ft1-snemovna.psp.cz%2Fzidle-api%2Fauthn%2Flogin_success%3Fsuccess_url%3Dhttps%3A%2F%2Ft1-snemovna.psp.cz%2Fzidle-api%2Fauthn%2Flogin_success%26return_url%3Dhttps%3A%2F%2Ft1-snemovna.psp.cz%2Fzidle%2F%26error_url%3Dhttps%3A%2F%2Ft1-snemovna.psp.cz%2Fzidle-api%2Fauthn%2Flogin_error%26i%3D03&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=qHGFbr7KHfKXeJqdRdMaqXj%2B4%2FR5T30w0HFrNCCcQyqh7cmWBrOhP2kqrPaG6ZEgBeU9gUHsH2h%2Bmcjqe3vFqe4sQcLZMs%2BRpvNNTMaYrYLZ7bCfpF2xL9LCpYS1qXIb4mQ1yVmeUpgJswoz2OktwORg9xShoY9X4bbKXDPcUYdcs%2BpAO%2FifjjauVs4TQjW3PmBBHszDfX6iZA%2FAhzx7x8IOWNSbwz3G%2BFqxs6qTLSrOR7sf6d1SpEDhldU5%2B1NQ4mkxxSqJKTkHQ3J%2F9WV6PXYkUrVFb%2B31kRBzK4QJz7pi0sjA%2BscnHMTEEjTIR3rNgKUacYDCyCdybrtKzFedGg%3D%3D&client-request-id=ebdf9ad9-af0e-45c7-fbd4-0040000000c0&pullStatus=0';
const username = 'psp-dev@psp.cz';
const password = '38a3bced34X_?';

//hlavní stránka
const baseURL = 'https://t1-snemovna.psp.cz/zidle';




const pageUrls = {
    logOutPage : `${baseURL}/logout`,
    dashboard : `${baseURL}/dashboard`,
    appSettings: `${baseURL}/app-settings`,
}




module.exports = {
    zidleLoginPage,
    username,
    password,
    baseURL,
    pageUrls,
    
}