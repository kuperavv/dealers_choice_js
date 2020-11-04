const albumDetails = [
  {
    title: 'Real',
    released: 'May 7, 2009',
    label: 'EMI Colombia',
    format: ['CD', 'digital download'],
  },
  {
    title: 'La Familia',
    released: 'October 29, 2013',
    label: 'Capitol Latin',
    format: ['CD', 'digital download'],
  },
  {
    title: 'Energia',
    released: 'June 24, 2016',
    label: 'Capitol Latin',
    format: ['CD', 'digital'],
  },
  {
    title: 'Vibras',
    released: 'May 25, 2018',
    label: 'Universal Latin',
    format: ['CD', 'digital'],
  },
  {
    title: 'Oasis',
    released: 'June 28, 2019',
    label: 'Universal Latin',
    format: ['CD', 'digital', 'streaming'],
  },
  {
    title: 'Colores',
    released: 'March 19, 2020',
    label: 'Universal Latin',
    format: ['CD', 'digital', 'streaming'],
  },
];

module.exports = {
  albums: [...albumDetails],
  album(name) {
    return { ...albumDetails.find((_album) => _album.title === name) };
  },
};
