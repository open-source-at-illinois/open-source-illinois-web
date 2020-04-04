
# Open-Source @ Illinois Website
This is main GitHub repository for the website hosted at [osai-web.com](https://osai-web.com).

Thomas Driscoll layed the foundation for the development of both the backend and frontend code.
Since then, many club members have contributed and are still contributing. 
Thomas Driscoll, Brian Wilens and Ben Thayer worked together to push the site to production.

### Frontend
The frontend is located in `./front-end` and was written using Angular.

### Backend
The backend is located in `./server`. The backend maintains the connection to the database and serves it up to the frontend and to the user directly

### Running in Development
All you need installed prior to running the commands below is node.js and `npm`. `npm` will do the work of installing the rest for you.


#### server/config/config.js
Contact Thomas or Ben for access to this file for the club's test database. It specifies the database to be used. Alternatively, you could use your own mongo host by including the following in `server/config/config.js`
```
module.exports = {
  testUrl : function (){
    return "mongodb+srv://user:password@mongohost/test?retryWrites=true&w=majority";
  }
}
```

```
# Clone this repo and cd into it
cd backend
npm install
cd ..
cd front-end
npm install
npm run build
npm run serve
```
You'll need the server access information from Thomas, or you can use your own MongoDB server

### Running in Production
 * `./runserver` - Builds and runs the server using Docker
 * `./killserver` - Stops the Docker containers
 * `./runold` - Skips the build process and reloads the old Docker container
 * `./refresh` - Deletes old Docker images
