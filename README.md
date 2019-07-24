# Prisma React GraphQL Showcase

Ping Pong based game: https://en.wikipedia.org/wiki/Table_tennis

Execute the command lines below on your terminal to install and run this app.

## Installation 

```
# Ubuntu
sudo apt install nodejs npm

# Mac OS
brew install node npm
```

## Run

```
npm install
npm start
```

If you wish to run the entire stack locally (optional)
1. Open `.env` file and switch remote `REACT_APP_GRAPHQL_URI` variable to localhost
2. Open `endpoint.yml` file and switch remote `endpoint` variable to localhost
3. Run backend locally with `docker-compose up -d`
4. Install Prisma CLI `npm install -g prisma` (only once)
5. Deploy `prisma deploy`

Then go to http://localhost:8080

Note: 
- If you need more details about Prisma and Docker follow the tutorial: 
https://www.prisma.io/docs/get-started/01-setting-up-prisma-existing-database-JAVASCRIPT-a003/

## Backend Access Point

 Remote
- GraphQL: https://us1.prisma.sh/jonathan-dorleans-246be5/ping-pong/dev
- Admin: https://us1.prisma.sh/jonathan-dorleans-246be5/ping-pong/dev/_admin

Local
- GraphQL: http://localhost:4466
- Admin: http://localhost:4466/_admin


## Auth

Application is secured with basic auth.
- A non-encrypted login session is generated to manage routes access
- Login with existing user or sign up is required to access the game
- Logout is possible with `/logout` on the url

## i18n

Support to EN and FR was added.
- Supported languages are picked up from browser, otherwise falls back to EN
- Add `?lang=en` or `?lang=fr` to the url to switch between EN and FR languages


## The Game

1. Add players names and start a new game
2. Play the game following the rules below
3. Start a new game once there is a winner

Rules:
- Players can either Score or Miss a point
- Player wins a Set when 11 points are reached within 2 points ahead opponent
- Player wins a match when 3 Sets are won out of 5
- Serving rounds are 2 times alternating for each player, unless Deuce is reached which serving alternates for each score
- Deuce is reached when players are at 10 points each
- First player (left card) always starts serving
