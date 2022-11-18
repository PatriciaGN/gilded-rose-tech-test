const AgedBrie = require('../src/agedBrie');
const Sulfuras = require('../src/sulfuras');
const BackstagePasses = require('../src/backstagePasses');
const ConjuredItem = require('../src/conjuredItem');

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let itemName = this.items[i].name;
      if (itemName === 'Aged Brie') {
        let agedBrie = new AgedBrie(this.items[i]);
        agedBrie.updateQualityAgedBrie();
        this.items[i].sellIn = agedBrie.itemSellIn();
        this.items[i].quality = agedBrie.itemQuality();
      } else if (itemName === 'Sulfuras, Hand of Ragnaros') {
        let sulfuras = new Sulfuras(this.items[i]);
        sulfuras.updateQualitySulfuras();
        this.items[i].sellIn = sulfuras.itemSellIn();
        this.items[i].quality = sulfuras.itemQuality();
      } else if (itemName === 'Backstage passes to a TAFKAL80ETC concert') {
        let backstagePasses = new BackstagePasses(this.items[i]);
        backstagePasses.updateQualityBackstagePasses();
        this.items[i].sellIn = backstagePasses.itemSellIn();
        this.items[i].quality = backstagePasses.itemQuality();
      } else if (itemName.includes('Conjured')) {
        let conjuredItem = new ConjuredItem(this.items[i]);
        conjuredItem.updateQualityConjuredItem();
        this.items[i].sellIn = conjuredItem.itemSellIn();
        this.items[i].quality = conjuredItem.itemQuality();
      } else {
        if (this.items[i].sellIn < 1) {
          this.items[i].quality -= 2;
        } else {
          this.items[i].quality -= 1;
        }
        if (this.items[i].quality < 0) {
          this.items[i].quality = 0;
        }
        this.items[i].sellIn -= 1;
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
