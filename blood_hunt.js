var app = new Vue({
  el: '#app',
  data: {
    hunters: 1,
    blood_level: 1,
    upkeep: 55,
    starting_pop: 5500,
    order: 0,
    growth: 0,
    months: [
      {
        number: 1,
        population: 0,
        unrest: 0,
        income: 0,
        slaves: 0,
        lost_income: 0,
        lost_taxes: 0,
        upkeep: 0,
        total_gold: 0,
        cost: 0
      },
    ]
  }
});

console.log('loaded blood_hunt.js');
