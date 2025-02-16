import React from "react";
import Chart from "react-apexcharts";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };
    // Line Chart for Inventory & Orders
    const lineChartOptions = {
        chart: { type: "line", toolbar: { show: false } },
        stroke: { curve: "smooth", width: 5 },
        colors: ["#ffcc00"],
        series: [{ name: "Inventory", data: [25, 40, 60, 80, 50, 90, 70] }],
        xaxis: { categories: ["12th", "13th", "14th", "15th", "16th", "17th"] },
    };

    const ordersChartOptions = {
        ...lineChartOptions,
        colors: ["#ff3366"],
        series: [{ name: "Orders", data: [20, 35, 55, 70, 45, 85, 65] }],
    };

    // Donut Chart for Battery
    const batteryChartOptions = {
        chart: { type: "donut" },
        labels: ["Remaining", "Consumed"],
        series: [65, 35],
        colors: ["#0066ff", "#ffcc00"],
    };

    // Line Chart for Margin %
    const marginChartOptions = {
        chart: { type: "line", toolbar: { show: false } },
        stroke: { curve: "smooth", width: 3 },
        colors: ["#ccff33"],
        series: [{ name: "Margin %", data: [20, 40, 60, 80, 60, 90, 70] }],
        xaxis: { categories: ["12th Oct", "13th Oct", "14th Oct", "15th Oct", "16th Oct", "17th Oct"] },
        tooltip: {
            enabled: true,
            marker: { show: true },
            y: { formatter: (val) => `${val}%` },
        },
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="header">Analytics Dashboard
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
            <Sidebar />
            <div className="dashboard-content">
                {/* Inventory Card */}
                <div className="Inventorycard">
                    <h3>Inventory</h3>
                    <p>93%</p>
                    <div className="chartcontainer">
                        <Chart options={lineChartOptions} series={lineChartOptions.series} type="line" width="100%" height="100%" />
                    </div>
                </div>

                {/* Orders Card */}
                <div className="Orderscard">
                    <h3>Orders</h3>
                    <p>65%</p>
                    <div className="chartcontainer"><Chart options={ordersChartOptions} series={ordersChartOptions.series} type="line" width="100%" height="100%" /></div>

                </div>

                {/* Battery Card */}
                <div className="Batterycard">
                    <h3>Battery</h3>
                    <div className="chartcontainer">
                        <Chart options={batteryChartOptions} series={batteryChartOptions.series} type="donut" width="100%" height="100%" />
                    </div>
                </div>

                {/* Margin % Card */}
                <div className="Margincard">
                    <h3>Margin %</h3>
                    <div className="chartcontainer">
                        <Chart options={marginChartOptions} series={marginChartOptions.series} type="line" width="100%" height="100%" />
                    </div>
                </div>
            </div>

            <div className="footer">© 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</div>
        </div>
    );
};

export default Dashboard;
