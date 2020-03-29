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


#### Environment variables
You'll need a `.env` file.
I that file, specify the `MONGO_URI` variable to be the link to your MongoDB database. For a production environment, the precense of the `PROD` variable will configure everything else appropriately.
Contact Thomas or Ben for access to the test database URI.

#### Running the server
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

