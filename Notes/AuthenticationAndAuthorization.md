- **Authentication**:
Authentication is the process of verifying who someone is

- **Authorization**:
Authorization is the process of verifying what specific applications, files, and data a user has access to.

* Password is stored in its **Hashed** form .
- Each time a user passes a password, the hashing function converts it into its hashed form and searches for it in the database. To identify whether the user is verified or authenticated or not .
**Hashing Function :** 
- For every input has a fixed output. 
- One-way function , we can't get input from output
- For a different input, there will be a different output but of the same length. 
- Small changes in input bring large changes in output. 
- we should use slow hash function to avoid getting possible hash value of the real possible outputs quickly(reverse lookup table - output with the input(found using possible inputs)).

**Password Salting :** is a technique to protect password stored in database by adding a string of 32 or more characters and hashing them. e.g. - password = nandini123 , salt = 1212 , final password = 1212nandini123 - then it will be converted into hash and stored in the database.Similarly , each password will have 1212 added in beginning of them and then converted into hashed form and stored . It helps  to avoid getting possible hash value of the real possible outputs (reverse lookup table - output with the input(found using possible inputs)).

- Passport - is Express-compatible  authentication middleware for node.js. 
- Uses pbkdf2 Hashing Algorithm .
- Require session setup .
- Passport-local -> Passport Strategy for authenticating with a name and a password. 
- Passport-Local Mongcose is a Mongoose plugin that simplifies building username and password
login with Passport. 