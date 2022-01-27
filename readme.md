# labelbox_proj

An API backend that interacts with NASA's apod API and uses REST architecture. Powered by Express and MongoDB database.  

## API Endpoints

|        API Endpont       | HTTPS Verb |                           Action                          |
|:------------------------:|:----------:|:---------------------------------------------------------:|
| /api/image               | GET        | Fetches an image from NASA apod API and store in database |
| /api/user                | POST       | Creates a new user                                        |
| /api/user                | DELETE     | Deletes a user                                            |
| /api/rating              | POST       | Creates a new rating                                      |
| /api/rating/:rating_id   | PUT        | Updates a user rating                                     |
| /api/rating/:rating_id   | DELTE      | Deletes a user rating                                     |
| api/rating/user/:user_id | GET        | Fetches all user's ratings                                |

## Objects

![App Screenshot](/assets/models.jpeg?raw=true)

## Tech Stack

**Server:** Node, Express, 

**Database**: MongoDB Atlas


## Run Locally

Clone the project

```bash
  git clone https://github.com/miguelkristian17/Bujo
```

Go to the project directory

```bash
  cd labelbox_proj
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Usage

Visit localhost:5000/register to view the app