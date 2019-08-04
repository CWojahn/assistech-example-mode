new Chart(document.getElementById("assist-total"), {
  type: 'doughnut',
  title: "sei la",
  data: {
    labels: ["Abertas", "Em execução", "Concluidas", "Total"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f", "#ff0000"],
        data: [534,135,2350,3019]
      }
    ]
  },
  options:{
    legend: false,
    title:{
      display: true
    }
  }
});

new Chart(document.getElementById("assist-open"), {
  type: 'doughnut',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [2478,5267,734,784]
      }
    ]
  },
  options:{
    labels: {
      position: "bottom"
    }
  }

});