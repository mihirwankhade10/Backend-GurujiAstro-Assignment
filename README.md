# Backend-GurujiAstro-Assignment

## Todo App API with JWT Authentication

This is a RESTful API built using Node.js and Express to manage tasks in a Todo App. The API includes JWT (JSON Web Token) authentication to secure the endpoints and ensure that only authenticated users can perform CRUD operations on their own tasks.

## Features

- User registration and login using JWT authentication
- Create, read, update, and delete tasks
- Authorization to ensure users can only manage their own tasks
- MongoDB as the database to store task information

## Screenshots of User Authentications
### User Registeration using JWT authentication
<img width="960" alt="user-registeration" src="https://github.com/mihirwankhade10/Backend-GurujiAstro-Assignment/assets/87888969/570c301f-2912-4ecb-af00-82676032ee43">

### User Login using JWT authentication
<img width="960" alt="user-login" src="https://github.com/mihirwankhade10/Backend-GurujiAstro-Assignment/assets/87888969/36a10bee-5d1d-477d-903d-d4ef675058eb">

## Screenshots of CRUD API's only for Authurized users
### Create Todo
<img width="960" alt="create-todo-api" src="https://github.com/mihirwankhade10/Backend-GurujiAstro-Assignment/assets/87888969/f3fdce35-0714-429c-a6e7-6e9350a4ac19">

### Get all Todos
<img width="960" alt="get-all-todo-api" src="https://github.com/mihirwankhade10/Backend-GurujiAstro-Assignment/assets/87888969/433d9949-0fde-4b17-88fb-4c9a636f0b0e">

### Update Todo
<img width="960" alt="update-todo-api" src="https://github.com/mihirwankhade10/Backend-GurujiAstro-Assignment/assets/87888969/071d6e3e-80d4-473d-89d4-6fbb842f3adb">

### Delete TOdo
<img width="960" alt="delete-todo-api" src="https://github.com/mihirwankhade10/Backend-GurujiAstro-Assignment/assets/87888969/87b4f946-3a4a-4af9-89c6-cadc5992e9fd">

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`

## Configuration

1. Rename the `.env.example` file to `.env`.
2. Update the values in the `.env` file with your own configuration:
   - `PORT`: The port on which the server will run (default: 3000)
   - `MONGODB_URI`: The connection string for your MongoDB database
   - `JWT_SECRET`: The secret key used for JWT token generation and verification

## Usage

1. Start the server: `npm start`
2. The API will be available at: `http://localhost:3000`

## API Endpoints

- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Log in and obtain a JWT token
- **GET /api/todos**: Get all tasks for the authenticated user
- **POST /api/todos**: Create a new task for the authenticated user
- **PUT /api/todos/:id**: Update a specific task for the authenticated user
- **DELETE /api/todos/:id**: Delete a specific task for the authenticated user

For detailed information on the request and response formats, please refer to the API documentation.

## Testing

You can test the API using tools like ThunderClient, Postman, or cURL. Use the provided API endpoints with the required headers and request bodies as described in the API documentation.

### Testing with ThunderClient
You can test the API endpoints using ThunderClient, a REST client extension for Visual Studio Code.
Install ThunderClient extension in Visual Studio Code.
Open ThunderClient and create a new HTTP Request Collection.
Add requests for each API endpoint mentioned above, providing the necessary request bodies and headers (including the JWT token as the Authorization header for authenticated requests).
Send the requests and verify the responses.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality, feel free to open an issue or submit a pull request.

## License

This project is done by Mihir_Wankhade
