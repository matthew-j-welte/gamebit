# Frontend Features

## Landing Page

Sign Up/Login screen for those who arent already logged in

## Homepage

- Jumbotron
  - Profile photo
  - Username
  - Rank
  - Level (with level bar)
  - Tokens
- Notifications carousel
- Continue Playing Games (Top 3)
  - With re-route to Gamepage
- Leaderboard with a few other players
  - With re-route to full leaderboard
- View Gamer Card
  - With re-route to edit gamer card

## Gamepage (name pending)

Flow:

- Page loads
- A list of featured games are being previewed (gifs/videos) in a carousel of sorts
- When the user hovers over a game it quickly (0.1/0.2s transition) takes over the featured game carousel screen
- The state of the carousel is paused and stored when the user hovers over the game
- When the user unhovers from a game the game should keep playing for around 1 second
- The featured games should then pick up where they left off
- Lets say someone hovers over a game then immediately hovers over another one, in that case the second game should start playing without waiting the 1 second

Technical Flow:

- Have an observable that waits the one second and then sets the featured games back to active
- When a user hovers over a game cancel/delete the previous observable (if it exists)
- Set that game to active
- When the user unhovers
- Overwrite the previously deleted observable with a new one that will also set it back to featured games after 1 second

- Jumbotron that plays game previews
  - Starts playing the featured games by default on page load
  - Shows the game being hovered over otherwise
- To Browse all Games
- Featured Games (possibly taking up the full width of the container)
- Continue Playing
- New Games
- Browse all Games
  - Sort By
  - Filter
    - Language Filter
    - Difficulty
    - Year Created
    - Reviews (1/2/3/4/5 stars)

## Game Details

- Jumbotron with game picture as background and large name

  - Below the picture include:
    - Creator (link to gamer card)
    - Reviews (0-5 stars)
    - Total Plays

- 3 tabs
  - Leaderboard
    - Top 3 in large triangle shape at the top in gold silver and bronze
    - top 10/25 leaderboard below
  - Game Details
    - Date Created
    - Game description
    - Game languages
    - Game skills
    - Difficulty
    - Total Tokens
  - Player Stats
    - Rank
    - Progress (if available)
    - Plays
    - Tokens close to earned (if the game has tokens like that)
    - Total tokens / earned tokens

| Leaderboard | Game Details | Progress |

## Leaderboard

- Top 3 Players
- Top 10 players
- Your +/- 10 ranks
- Your highest ranked games
  - +/ 3-10 ranks for each game

## Gamer Card (Modal)

- Top portion small jumbotron similar to homepage
- Lvl
- Tokens
- Top Games (small cards)
- Rank
- Title (Maybe)
- Verified Name (if available)

## Notification Details (Modal)

## Navbar

Links:

- Notifications (icon) dropdown
- Messages (icon) dropdown
- Gamepad (icon)
- Leaderboards (icon)
- Logged in User Photo
- Username + Dropdown icon with:
  - (icon) Edit Profile
  - (icon) Edit Player Card
  - (icon) Log Out
  - (icon) Settings

**Big Screen**:
Left: - Notifications (icon) dropdown - Messages (icon) dropdown
Center: - Home (gamebit logo/header) -> /home
Right:

---

# Frontend URLs

- Landing Page: /
- Home Page: /home
- GamePad Page: /gamepad
- Game Details Page:
  - /game/<gameId>?tab=leaderboard
  - /game/<gameId>?tab=details
  - /game/<gameId>?tab=player
