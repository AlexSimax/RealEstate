export const filterData = [
  {
    items: [
      { name: '10,000', value: '10000' },
      { name: '50,000', value: '50000' },
      { name: '100,000', value: '100000' },
      { name: '200,000', value: '200000' },
      { name: '300,000', value: '300000' },
    ],
    placeholder: 'Min Price (£)',
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
    placeholder: 'Max Price (£)',
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
    placeholder: 'Beds',
    queryName: 'bedsMin',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
    ],
    placeholder: 'Baths',
    queryName: 'bathsMin',
  },
  {
    items: [
      { name: 'Lowest Price', value: 'fields.price' },
      { name: 'Highest Price', value: '-fields.price' },
      { name: 'Newest', value: '-sys.updatedAt' },
      { name: 'Oldest', value: 'sys.updatedAt' },
    ],
    placeholder: 'Sort',
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
