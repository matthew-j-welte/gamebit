using System.Collections;

namespace Domain
{
  class PlayerProfile
  {
    public string PlayerId { get; set; }
    public string PartitionKey => this.PlayerId;
    public string Username { get; set; }
    public string ProfileImageUrl { get; set; }
    public string? VerifiedPlayerFullName { get; set; }
    public int Level { get; set; }
    public int Experience { get; set; }
    public int Tokens { get; set; }
    public IEnumerable<PlayerProgrammingLanguage> ProgrammingLanguageExclusions { get; set; }
    public string? ProffesionalTitle { get; set; }
    public int? YearsTechnicalExperience { get; set; }
    public string? PlayerBio { get; set; }

  }

  class PlayerProgrammingLanguage
  {
    public string ProgrammingLanguageId { get; set; }
    public string ProgrammingLangaugeName { get; set; }
  }
}

// IMPORTANT
// Should keep games and level rules cached in redis or something for quick lookups across microservices