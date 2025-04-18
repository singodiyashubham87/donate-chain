import React, { Fragment } from "react";
import { Pie, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { mockNGOs } from "@/app/data/ngos";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)


export default function Analytics() {
  return (
    <Fragment>
      <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2 text-center">
            Donation Distribution
          </h2>
          <Pie
            data={{
              labels: mockNGOs.map((ngo) => ngo.name),
              datasets: [
                {
                  label: "Donated Amount",
                  data: mockNGOs.map((ngo) => ngo.donatedAmount),
                  backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
                },
              ],
            }}
          />
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800 rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2 text-center">
            Donation Goal Progress
          </h2>
          <Bar
            data={{
              labels: mockNGOs.map((ngo) => ngo.name),
              datasets: [
                {
                  label: "Donation Goal",
                  data: mockNGOs.map((ngo) => ngo.donationGoal),
                  backgroundColor: "#d1d5db",
                },
                {
                  label: "Donated",
                  data: mockNGOs.map((ngo) => ngo.donatedAmount),
                  backgroundColor: "#4f46e5",
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </Fragment>
  );
}
