window.addEventListener('load', function () {
    const ctx = document.getElementById('salesChart').getContext('2d')
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            data: [10, 15, 20, 5, 10, 8, 12, 18, 7, 14, 9, 6],
            backgroundColor: [
                '#FFB74D', '#FF8A65', '#FF7043', '#FFAB40', '#FFCC80',
                '#FFD54F', '#FFCA28', '#FF9800', '#FF5722', '#F57C00',
                '#FF6F00', '#FF3D00'
            ],
            borderColor: '#ffffff',
            borderWidth: 1
        }]
    }

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }

    const salesChart = new Chart(ctx, config)

    const legendContainer = document.getElementById('legend')
    data.labels.forEach((label, index) => {
        const legendItem = document.createElement('div')
        legendItem.className = 'legend-item';
        legendItem.innerHTML = /*html*/`
            <div class="color-box" style="background-color: ${data.datasets[0].backgroundColor[index]}"></div>
            ${label}: ${data.datasets[0].data[index]}%
        `
        legendContainer.appendChild(legendItem)
    })
})