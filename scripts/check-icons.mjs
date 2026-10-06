import * as lucide from 'lucide-react'
const candidates = [
  'Soil','Spray','Dropper',            // current (missing)
  'Mountain','Landscape','Shovel','Pickaxe','Tractor','Wheat','Sprout','Layers',
  'SprayCan','Droplets','EyeDropper','Pipette','FlaskConical','Beaker','TestTube',
  'Sun','CloudRain','Cloud','Trees','TreePalm','TreeDeciduous','Flower','Flower2',
  'Wheat','Carrot','Apple','Citrus','Grapes','Cherry','Beef','Egg',
  'Recycle','Leaf','Plant','Seedling','Clover','Cabbage','Lettuce',
]
const present = candidates.filter(n => typeof lucide[n] !== 'undefined')
const missing = candidates.filter(n => typeof lucide[n] === 'undefined')
console.log('PRESENT:', present.join(', '))
console.log()
console.log('MISSING:', missing.join(', '))
