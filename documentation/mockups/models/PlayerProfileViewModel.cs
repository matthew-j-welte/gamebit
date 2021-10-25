using System.Collections;

namespace ViewModels
{
  class PlayerProfileViewModel
  {
    public string PlayerId { get; set; }
    public string Username { get; set; }
    public string ProfileImageUrl { get; set; }
    public string? VerifiedPlayerFullName { get; set; }
    public int Level { get; set; }
    public int PreviousLevelExperience { get; set; }
    public int Experience { get; set; }
    public int NextLevelExperience { get; set; }
    public int Tokens { get; set; }
    public IEnumerable<PlayerGameCardDto> TopGames { get; set; }
    public IEnumerable<PlayerRankingDto> PlayerRankings { get; set; }
    public string? ProffesionalTitle { get; set; }
    public int? YearsTechnicalExperience { get; set; }
    public string? PlayerBio { get; set; }
    public IEnumerable<PlayerProgrammingLanguageDto> ProgrammingLanguageExclusions { get; set; }

  }

  class PlayerProgrammingLanguageDto
  {
    public string ProgrammingLanguageId { get; set; }
    public string ProgrammingLangaugeName { get; set; }
    public string ImageUrl { get; set; }
  }

  class PlayerRankingDto
  {
    public string PlayerId { get; set; } // So we can link to their profile // should show our profile as active and not clickable
    public int Ranking { get; set; }
    public string Username { get; set; }
    public string Experience { get; set; }
  }
}

// IMPORTANT
// Should keep games and level rules cached in redis or something for quick lookups across microservices