const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '2024',
    },
  },
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
    },
  },
};

export default options;
