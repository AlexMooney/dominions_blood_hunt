let inputs = new Vue({
  el: '#inputs',
  data: {
    mc_rounds: 1,
    months: 12,
    hunters: 1,
    blood_level: 1,
    upkeep: 55,
    starting_pop: 5500,
    order: 0,
    growth: 0
  },
  updated: function () {
    monte_carlo()
  }
});

let results = new Vue({
  el: '#results',
  data: {
    months: []
  }
});

function monte_carlo() {
}
