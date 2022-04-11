# Boardzilla

Boardzilla is a framework for making and playing board games.

Using javascript to describe the game board and pieces, and then a simple set of rules to define what pieces can be moved by whom and at
what point. Boardzilla comes with a built-in web app that can used to play the game rules for any number of players, on web or mobile. Out
of the box it translates the rules of the game into a simple set of draggable objects, and these can be customized to your heart's content
with CSS and images.

Tic-tac-toe

## Development

To set up development, run `./scripts/init`. This will do the initial installation of packages and initialize the databases.

Once you have done this you can run a game by running `GAME=game-name ./scripts/dev`. For instance, to run Four Souls, run `GAME=isaac-four-souls ./scripts/dev`.

The test suite can be run with `./scripts/test`.

## Game structure

The server and client for each game is contained in a folder for the game. The server subclasses `game-core/server/interface` and exports that in it's index.js, while the client uses the `render` exported from `game-core/client`.