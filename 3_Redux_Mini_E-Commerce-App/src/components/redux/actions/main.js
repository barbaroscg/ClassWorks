export const urunEkle = (urun) => {
  return {
    type: 'ADDITEM',
    payload: urun,
  };
};

export const urunSil = (urun) => {
  return {
    type: 'DELITEM',
    payload: urun,
  };
};
