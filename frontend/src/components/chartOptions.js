export const lineOptions = {
    layout: {
        padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltips: {
            backgroundColor: "#fff",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
        },
    },
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: {
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10,
            },
            grid: {
                drawTicks: true,
                drawBorder: false,
                display: true,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent",
            },
            title: {
                display: true,
                text: 'USD'
            }
        },
        x: {
            grid: {
                display: false,
                color: "rgba(255,255,255,0.1)",
            },
            ticks: {
                padding: 10,
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold",
            },
        },
    },
};