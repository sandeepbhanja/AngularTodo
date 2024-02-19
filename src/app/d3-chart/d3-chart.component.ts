// import { Component, OnInit } from '@angular/core';
// // Include Data interface/type definition (if applicable)
// import { CommonModule } from '@angular/common';
// import * as d3 from 'd3';

// @Component({
//   selector: 'app-d3-chart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './d3-chart.component.html',
//   styleUrls: ['./d3-chart.component.scss']
// })
// export class D3ChartComponent implements OnInit {
//   // Or use appropriate type
//   dataset = [{ type: "Sample 1", value: 50, radius: 7 },
//   { type: "Sample 2", value: 30, radius: 11 },
//   { type: "Sample 3", value: 10, radius: 3 }]
//   ngOnInit(): void {
//     // Ensure data is available before calculations
//     if (this.dataset.length > 0) {
//       const ymax = d3.max(this.dataset, (d) => d.value);
//       const types = this.dataset.map((d) => d.type);

//       const margin = { top: 40, right: 150, bottom: 60, left: 30 },
//         width = 500 - margin.left - margin.right,
//         height = 420 - margin.top - margin.bottom;

//       const svg = d3
//         .select('#d3chart')
//         .append('svg')
//         .attr('width', width + margin.left + margin.right)
//         .attr('height', height + margin.top + margin.bottom)
//         .append('g')
//         .attr('transform', `translate(${margin.left}, ${margin.top})`);

//       const x = d3
//         .scaleBand()
//         .domain(types)
//         .range([0, width]);

//       svg
//         .append('g')
//         .attr('transform', `translate(0, ${height})`)
//         .call(d3.axisBottom(x));

//       const y = d3
//         .scaleLinear()
//         .domain([0, ymax ? ymax + 10 : 60])
//         .range([height, 0]);

//       svg.append('g').call(d3.axisLeft(y).ticks(7));

//       let i: number = 1

//       while (!x || !y) { }
//       const circles = svg
//         .append('g')
//         .selectAll('circle')
//         .data(this.dataset)
//         .enter()
//         .append('circle')
//         .attr('cx', (d) => x(d.type)+50)
//         .attr('cy', (d) => y(d.value))
//         .attr('r', (d) => d.radius)
//         .style('fill', 'lightcyan')
//         .style('opacity', '0.7')
//         .attr('stroke', 'black');

//     } else {
//       console.error('Dataset is empty. Cannot create chart.');
//     }
//   }
// }
