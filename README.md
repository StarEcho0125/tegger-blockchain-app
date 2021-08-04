This project gets token data from coincap api and display them.
You can see the top 20 token data in the table and can see the detailed price information if you click the row of table.
Also you can filter tokens by their name.

This project is MERN stack project.
It's backend is node/express.js and frontend is react.js.

##################################################################################################################
To run developement frontend server, please open the terminal in the project root directory and run the following commands.
cd frontend
npm install
npm start (yarn start)

To build the frontend project you can run the following command.
npm run build (yarn build)

To run backend(node.js) server, please run the following commands in the project root directory.
cd backend
npm install
npm start (yarn start)

Finally, to set the api url, please edit the config.js file of frontend/src directory.

##################################################################################################################
You can see the live link on http://37.122.209.216:3000/

##################################################################################################################
The frontend project is bootstrapped from create-react-app.
It uses redux for state management and all components are functional components and uses hooks.
And it sends request to the node.js backend to get required data.
In the layouts directory, you can see main layouts.
Currently there are only header, but you can define more layout components such as footer, navigation bar..
In the pages directory, you can see main pages. (Currently there are 2 pages.)
And in the components directory, you will see the components.

In the backend, it calls apis to get required data.