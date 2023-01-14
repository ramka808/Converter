const RATES = {
  usd: 0.14,
  eur: 0.13
};

function convert({rub,currency}){
  if(!RATES[currency]){
    return null
  }

  return 'Это '+(rub * RATES[currency]).toFixed(2)+' руб'
}