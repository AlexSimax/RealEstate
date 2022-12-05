export const filterDataRent = [
  {
    items: [
      { name: '100', value: '100' },
      { name: '500', value: '500' },
      { name: '1000', value: '1000' },
      { name: '2000', value: '2000' },
      { name: '3000', value: '3000' },
    ],
    placeholder: 'Мин. цена (£)',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: '500', value: '500' },
      { name: '1000', value: '1000' },
      { name: '2000', value: '2000' },
      { name: '5000', value: '5000' },
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
