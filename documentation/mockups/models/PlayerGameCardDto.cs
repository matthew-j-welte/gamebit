using System.Collections;

namespace Dtos
{
  class PlayerGameCardDto
  {
    public string GameId { get; set; }
    public string GameName { get; set; }
    public string GameImageUrl { get; set; }
    public int PlayerPlays { get; set; }
    public int PlayerRanking { get; set; }
    public int TokensEarned { get; set; }
    public int TotalGameTokens { get; set; }
  }
}

// IMPORTANT
// Should keep games and level rules cached in redis or something for quick lookups across microservices