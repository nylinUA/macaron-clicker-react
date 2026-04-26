# macaron-clicker-react

This is a cookie-clicker type app made using React. 

## How to set-up

This is hella scuffed. If things don't work, let me know.

1. Install Docker Desktop
2. Have Docker Desktop Open when you run things
3. 

### Run the development server

1. Have Docker Desktop open
2. In the root of the repo, run in the terminal:
`
docker compose watch
`
3. Go to http://localhost:5173/ for the frontend server
4. Go to http://localhost:3000/ for the backend server

### Stop the development server

1. Stop docker compose watch with CTRL-C or whatever other way to kill it in the terminal
2. Run in terminal
`
docker compose down
`

## About the Docker stuff and this development in general

So I put everything into docker so that the development environment is the same even if you use windows/linux/mac/etc.

It seems that modern web development relies on "npm", so instead of requirements.txt we have package.json.

Unlike django, we have a frontend server and a backend server. Frontend pretty much does (java/type)script + html (React) rendering, whereas the backend is 
supposed to be the API. I haven't hooked up a database yet bc honestly I haven't thought that far about the scope of the project. If we do get a database, we will
call a backend API url from the frontend, and then the backend calls the database. I'll think about all that later tho.

Also so far the backend sever isn't in use. Idk if we will ever use it tbh unless we add like a leaderboard or like achievements.


## AI Use

I hope to not use AI for maybe the first 2-3 weeks so I can actually learn the basics this time. After that, maybe go wild with AI and try to make an actually shippable product. 
