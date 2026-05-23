* Stateful Protocol - require server to save the status and session information .e.g.-ftp 
The response can be changed due to the status and session info.
* Stateless Protocol - Does not require the server to retain the status and Session Information e.g.- http . The response doesn't change .

**Express Session:**  An attempt to make our session stateful.It stores data in the server and assigns a session ID.It is an npm package. It creates a seesion middleware. 
The session ID is required to store it as a cookie to retain the information regarding the previous session. 
 * Example: A user adds some makeup products into its cart and then it switches to another web page, which is for clothes. The cart still has to remember the previous makeup products the user has added into the cart. Here, the session ID of the previous session in which the user purchased or added makeup products into the cart is still stored on that webpage too in the form of cookies. These cookies will help to retain those products in the current cart too, even after switching the web page. 

* To use HTTP as a stateful protocol, we require storing the status or session information on the server and storing the session ID as a cookie on the web browser. 
* We cannot store whole data in cookies, as cookies can hold only a small amount of data. 
* Moreover, we cannot store session information and status in the database because only permanent data is stored in the database. 