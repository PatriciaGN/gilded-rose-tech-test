class AgedBrie {
  constructor(item) {
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  updateQualityAgedBrie() {
    if (this.quality < 50) {
      this.quality += 1;
    }
    this.sellIn -= 1;
  }
}

module.exports = AgedBrie;
