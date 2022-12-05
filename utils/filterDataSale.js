export const filterDataSale = [
  {
    items: [
      { name: '10,000', value: '10000' },
      { name: '50,000', value: '50000' },
      { name: '100,000', value: '100000' },
      { name: '200,000', value: '200000' },
      { name: '300,000', value: '300000' },
    ],
    placeholder: 'Мин. цена (£)',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: '50,000', value: '50000' },
      { name: '60,000', value: '60000' },
      { name: '85,000', value: '85000' },
      { name: '100,000', value: '100000' },
      { name: '200,000', value: '200000' },
      { name: '500,000', value: '500000' },
      { name: '1000,000', value: '1000000' },
    ],
    placeholder: 'Макс. цена (£)',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
    ],
    placeholder: 'Спальня',
    queryName: 'bedsMin',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
    ],
    placeholder: 'Санузел',
    queryName: 'bathsMin',
  },
  {
    items: [
      { name: 'Дешёвые', value: 'fields.price' },
      { name: 'Дорогие', value: '-fields.price' },
      { name: 'Новые', value: '-sys.updatedAt' },
      { name: 'Старые', value: 'sys.updatedAt' },
    ],
    placeholder: 'Сортировка',
    queryName: 'sort',
  },
]

export const getFilterValues = (filterValues) => {
  const { minPrice, maxPrice, bedsMin, bathsMin, sort } = filterValues

  const values = [
    {
      name: 'minPrice',
      value: minPrice,
    },
    {
      name: 'maxPrice',
      value: maxPrice,
    },
    {
      name: 'bedsMin',
      value: bedsMin,
    },
    {
      name: 'bathsMin',
      value: bathsMin,
    },
    {
      name: 'sort',
      value: sort,
    },
  ]

  return values
}
