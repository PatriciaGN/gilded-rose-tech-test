const { Shop, Item } = require('./src/gildedRose');
const AgedBrie = require('./src/agedBrie');
const Sulfuras = require('./src/sulfuras');
const BackstagePasses = require('./src/backstagePasses');
const ConjuredItem = require('./src/conjuredItem');

const gildedRose = new Shop([
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Conjured Mana Cake', 3, 6),
]);
const items = gildedRose.updateQuality();
console.log(gildedRose.items);
