'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = require("next/image");
const chart_js_1 = require("chart.js");
const react_chartjs_2_1 = require("react-chartjs-2");
chart_js_1.Chart.register(chart_js_1.ArcElement, chart_js_1.Tooltip, chart_js_1.Legend);
const user = [
    { id: 1, nombre: 'Pedro', totalCompra: 185 },
    { id: 2, nombre: 'Juan', totalCompra: 180 },
    { id: 3, nombre: 'Jacinta', totalCompra: 180 },
];
const data = {
    labels: user.map((item) => item.nombre),
    datasets: [
        {
            data: user.map((item) => item.totalCompra),
            backgroundColor: ['#e2f297', '#5aba8a', '#01565b'],
        },
    ],
};
const options = {
    plugins: {
        legend: {
            display: false,
            position: 'bottom',
            onClick: (_, legendItem, legend) => {
                if (legendItem && legend) {
                    console.log(`Clic en la leyenda: ${legendItem.text}`);
                    console.log(`Índice de la leyenda: ${legendItem.index}`);
                    console.log(`Estado de la leyenda: ${legendItem.hidden ? 'oculto' : 'visible'}`);
                    console.log(`Lista de todas las leyendas:`, legend.legendItems);
                }
            },
        },
    },
};
const ChartDoughnut = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-56 h-56 text-black relative", children: [(0, jsx_runtime_1.jsx)(react_chartjs_2_1.Doughnut, { data: data, options: options }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-white flex justify-center items-center", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-[#e0f095] w-28 h-28 rounded-full flex flex-col items-center justify-center", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: "http://localhost:3001/cohete.png", alt: "cohete.png", width: 100, height: 100 }) }) })] }));
};
exports.default = ChartDoughnut;
//# sourceMappingURL=ChartDoughnut.js.map