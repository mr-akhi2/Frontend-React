import React from 'react'

const Billing = () => {
    const invoiceData = {
        companyName: "ABC Corp",
        address: "123 Main Street, City, State, ZIP",
        contact: "Phone: 123-456-7890 | Email: support@abccorp.com",
        billTo: {
          name: "John Doe",
          address: "456 Elm Street, Town, ZIP",
          contact: "Phone: 987-654-3210",
        },
        items: [
          {
            date: "2024-12-01",
            itemNumber: "1001",
            description: "Wooden Blocks",
            quantity: 4,
            unitPrice: 10.0,
            discount: 0.0,
          },
          {
            date: "2024-12-01",
            itemNumber: "1002",
            description: "Plastic Blocks",
            quantity: 2,
            unitPrice: 15.0,
            discount: 5.0,
          },
        ],
        subtotal: 50.0,
        tax: 2.5,
        shipping: 5.0,
        total: 57.5,
        notes: "Total due in 10 days. Overdue accounts may incur additional fees.",
      };
  return (
   <div>
    <div className="container my-5 p-4 border rounded bg-light">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h2 className="fw-bold">Third Party Administration Pvt.ltd.</h2>
          <p>Bakshi ka Talab Lucknow</p>
          <p>+915678987654</p>
        </div>
        <div className="col-md-6 text-end">
          <h4 className="fw-bold text-uppercase">Commercial Invoice</h4>
        </div>
      </div>

      {/* Bill To Section */}
      <div className="row mb-4">
        <div className="col-12">
          <h5 className="fw-bold">Bill To:</h5>
          <p>Balchandra</p>
          <p>sudhiyani</p>
          <p>+91 7040182023</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>Date</th>
              <th>Disease_Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Cost</th>
              <th>Discount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
              <tr>
               <td>12/12</td>
               <td>cancer</td>
               <td>anthit</td>
               <td>blood cancer</td>
               <td>345678</td>
               <td>10%</td>
               <td>4</td>
              </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="row mt-4">
        <div className="col-md-6">
          <p className="text-muted">{invoiceData.notes}</p>
        </div>
        <div className="col-md-6 text-end">
          <p><strong>Subtotal:</strong>377</p>
          <p><strong>Tax:</strong>74747</p>
          <p><strong>Shipping:</strong>56789</p>
          <p className="fw-bold"><strong>Total:</strong> 456789</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Billing
