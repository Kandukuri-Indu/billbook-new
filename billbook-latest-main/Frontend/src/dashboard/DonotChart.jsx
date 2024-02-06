import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const DonotChart = () => {
    const [invoiceCounts, setInvoiceCounts] = useState({
        paid: 0,
        unpaid: 0,
        partiallyPaid: 0,
      });
  const [invoiceOptions, setInvoiceOptions] = useState({
    colors: ["#33B469", "#ff0000", "#393834"],
    chart: {
      fontFamily: "Poppins, sans-serif",
      height: 350,
      type: "donut",
    },
    series: [0, 0, 0], // Initialize with zeros
    labels: ["PAID", "UNPAID", "PARTIALLY PAID"],
    legend: { show: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/addInvoice/invoices');
        const data = await response.json();

        // Calculate the count of invoices for each status
        const paidCount = data.filter((invoice) => invoice.invoiceStatus === 'PAID').length;
        const unpaidCount = data.filter((invoice) => invoice.invoiceStatus === 'UNPAID').length;
        const partiallyPaidCount = data.filter((invoice) => invoice.invoiceStatus === 'PARTIALLY PAID').length;

        // Update the series based on the calculated counts
        setInvoiceOptions((prevOptions) => ({
          ...prevOptions,
          series: [paidCount, unpaidCount, partiallyPaidCount],
        }));
        console.log("paid",paidCount)
      } catch (error) {
        console.error('Error fetching invoice data:', error);
      }
    };

    fetchInvoiceData();
  }, []);
console.log("data",invoiceOptions)
  return (
    <div>
      <Chart options={invoiceOptions} series={invoiceOptions.series} type="donut" height={350} />
      <div className="row">
        <div className="col-4">
          <div className="mt-4">
            <p className="mb-2 text-truncate">
              <i className="fas fa-circle text-primary me-1"></i> Invoiced
            </p>
            <h5>{invoiceOptions.series[0]}</h5>
          </div>
        </div>
        <div className="col-4">
          <div className="mt-4">
            <p className="mb-2 text-truncate">
              <i className="fas fa-circle text-success me-1"></i> Received
            </p>
            <h5>{invoiceOptions.series[1]}</h5>
          </div>
        </div>
        <div className="col-4">
          <div className="mt-4">
            <p className="mb-2 text-truncate">
              <i className="fas fa-circle text-danger me-1"></i> Pending
            </p>
            <h5>{invoiceOptions.series[2]}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonotChart;


// import React, { useEffect, useState } from 'react';
// import Chart from 'react-apexcharts';

// const DonotChart = () => {
//   const [invoiceOptions, setInvoiceOptions] = useState({
//     colors: ["#33B469", "#ff0000", "#393834"],
//     chart: {
//       fontFamily: "Poppins, sans-serif",
//       height: 350,
//       type: "donut",
//     },
//     series: [0, 0, 0], // Initialize with zeros
//     labels: ["PAID", "UNPAID", "PARTIALLY PAID"],
//     legend: { show: false },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   });

//   const [amounts, setAmounts] = useState({
//     invoiced: 0,
//     received: 0,
//     pending: 0,
//   });

//   useEffect(() => {
//     const fetchInvoiceData = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/addInvoice/invoices');
//         const data = await response.json();

//         // Calculate the counts for each invoice status
//         const paidCount = data.filter((invoice) => invoice.invoiceStatus === 'PAID').length;
//         const unpaidCount = data.filter((invoice) => invoice.invoiceStatus === 'UNPAID').length;
//         const partiallyPaidCount = data.filter((invoice) => invoice.invoiceStatus === 'PARTIALLY PAID').length;

//         // Update the series based on the calculated counts
//         setInvoiceOptions((prevOptions) => ({
//           ...prevOptions,
//           series: [paidCount, unpaidCount, partiallyPaidCount],
//         }));

//         // Calculate amounts
//         const invoicedAmount = data.reduce((acc, invoice) => acc + invoice.amount, 0);
//         const receivedAmount = data.filter((invoice) => invoice.invoiceStatus === 'PAID').reduce((acc, invoice) => acc + invoice.amount, 0);
//         const pendingAmount = data.filter((invoice) => invoice.invoiceStatus === 'UNPAID').reduce((acc, invoice) => acc + invoice.amount, 0);

//         // Update the amounts state
//         setAmounts({
//           invoiced: invoicedAmount,
//           received: receivedAmount,
//           pending: pendingAmount,
//         });
//       } catch (error) {
//         console.error('Error fetching invoice data:', error);
//       }
//     };

//     fetchInvoiceData();
//   }, []);

//   return (
//     <div>
//       <Chart options={invoiceOptions} series={invoiceOptions.series} type="donut" height={350} />

//       <div className="row">
//         <div className="col-4">
//           <div className="mt-4">
//             <p className="mb-2 text-truncate">
//               <i className="fas fa-circle text-primary me-1"></i> Paid
//             </p>
//             <h5>${invoiceOptions.series}</h5>
//           </div>
//         </div>
//         <div className="col-4">
//           <div className="mt-4">
//             <p className="mb-2 text-truncate">
//               <i className="fas fa-circle text-success me-1"></i> Pending
//             </p>
//             <h5>${amounts.received.toFixed(2)}</h5>
//           </div>
//         </div>
//         <div className="col-4">
//           <div className="mt-4">
//             <p className="mb-2 text-truncate">
//               <i className="fas fa-circle text-danger me-1"></i> Partially Paid
//             </p>
//             <h5>${amounts.pending.toFixed(2)}</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonotChart;
