Reusable, Upgradable, Customizable Character

For any game that is simply a single avatar visible on the screen, should be able to reuse it, upgrade it and customize and have those customizations appear.

When you do release the first version just put all the game ideas you have into "coming soon" categories so its not just a website with one or two
game on it

On the gamepad for the jumbotron do the bottom bar with details like the profile but for the top part maybe do a preview screen for the game being hovered over

Need to make certain pages mobile friendly. For ex the profile page / game page.. basically anything excluding actually gameplay

If you really wanted to expand this website - you could also add a functionality for adding user based game ideas and then allowing developers to go in and create those games alone or together. You could then have the main gamebit with the games made internally and the community based games. This could allow us to publish community based games to the main page

## Gamepad

Main screen where you can find the most popular/featured games

**IDEA**:

- Possibly have gifs of the games (or just characters from the games) that fade in and out on the top part of the gamepad screen
- OR have the leaderboard right there

Sections:

- Continue Playing
- New & Popular (Symbol for new and symbol for popular)
- Browse All

Have the cards be somewhat shaped like board game boxes and designed in a similar way so you can rotate it

- On the back have a gif of the gameplay in a cutout

## Stack Page (Name pending)

Place where curious developers can go and get an in depth look at the technology used to create gamebit, some examples:

- The language each game was written in
- The frontend framework
- The hosting framework (K8s)
- The manner in which we architect/scale our games/APIs
- Maybe some fun facts about each game too
  - Source code lines
  - Size of game in MBs
  - Author? Assuming others start joining? Or maybe call it "Lead Developer" and have a link to their profile

## My Profile

- Show Experience
- Show tokens
- Show language rankings (languages favored in games)
- Favorite games

Fields:

PlayerProfileViewModel:

- Username
- OverallRanking
- VerifiedPlayerFullName
- ProfileImageUrl
- Level
- PreviousLevelExperience
- Experience
- NextLevelExperience
- Tokens
- PrograammingLanguageExclusions
- ProfessionalTitle
- YearsTechnicalExperience
- PlayerBio

PlayerProgrammingLanguageDto

- ProgrammingLanguageId
- ProgrammingLangaugeName
- ProgrammingLangaugeIconUrl

**what if instead of keeping image urls in a bunch of different entities just use the id of that particular entity (for example ProgrammingLanguageId for logos of the languages) in a lookup of some kind on the frontend? or cached in the backend? I guess ideally it should be able to be updated without redeployment and be shared across all microservices**

## Tokens

Similar to milestones or trophies. The main "reward system" found in gamebit

## Experience

Will earn experience with each token.
Will most likely earn it through other means
By submitting bugs

- Could be cool to include a description for the developer who submitted it on how we fixed it

Should be able to use points in the frontend itself and in games

---

Feel like I should move away from designing this like the "main" page will be the gamepad
Think about it, how often do you spend time searching for new games (especially with how low the game count will be) compared to the time spent playing the games, viewing your stats, claiming rewards/upgrades etc.

Turn the bottom bar of the Profile jumbotron into a sticky navbar

As people level up they can unlock new profile "themes" (thinking top part of profile can have some background image possibly with an overlay)
