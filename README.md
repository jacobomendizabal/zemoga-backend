DESCRIPTION

DESCRIPTION

This app corresponds to Part II of test Zamoga Part II, it is the REST API of the applicant Jacobo Arce, to access the data in the database.

WHAT YOU NEED TO USE THE APP

1.- Download the files
2.- Run npm i
3.- mongodb passport-example database
4. AWS

TECHNOLOGY USED
Amazon Web Services (EC2)
Ubuntu 20.04.4 LTS
Express 3.21.2
Mongoose 5.9.2
NodeJS 10.19.0
npm 6.14.4
MongoDB 3.6.8
Apache 3.6.8
PM2 5.2.0
Putty 0.73
PuttyGen 0.73
FileZilla 3.59
Postman 9.18.3

WAY TO TEST
The App test zamoga Part Ii is available running on the AWS route with the requested services:

GET All users    http://34.201.103.149:5000/api/users

GET specified user http://34.201.103.149:5000/api/users/628d889b3ab3df28589ab989

PUT (modify)
http://34.201.103.149:5000/api/users/628d889b3ab3df28589ab989
for which the example JSON is passed:
{
  "name": "Jacobo Arce Mendizabal",
  "experience": "Developer NodeJS"
}
