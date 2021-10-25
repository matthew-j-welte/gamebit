using System;

namespace Domain
{
  class PlayerActivity
  {
    public string GameId { get; set; }
    public string PlayerId { get; set; }
    public string PartitionKey => "player-activity-" + this.PlayerId;
    public string GameName { get; set; }
    public int HoursPlayed { get; set; }
    public int TokensEarned { get; set; }
    public int ExperienceGained { get; set; }
    public DateTimeOffset LastTimePlayed { get; set; }
  }
}

// IMPORTANT
// Should keep games and level rules cached in redis or something for quick lookups across microservices