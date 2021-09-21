'use strict'

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];

  for (const item of items) {
      let itemm = typeof item;
      console.log(`El dato ${item} es de tipo ${itemm}`)
  }