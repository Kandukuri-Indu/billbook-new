import React, { useEffect, useState } from 'react';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import Data from "../assets/jsons/datatables";
import { Table } from "antd";
import {
	onShowSizeChange,
	itemRender,
} from "../_components/paginationfunction";
import "../_components/antd.css";

const Datatables = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	};

	const datasource = Data?.Data;
	console.log(datasource);

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			sorter: (a, b) => a.name.length - b.name.length,
		},
		{
			title: "Position",
			dataIndex: "position",
			sorter: (a, b) => a.position.length - b.position.length,
		}, {
			title: "Office",
			dataIndex: "office",
			sorter: (a, b) => a.office.length - b.office.length,
		},
		{
			title: "Age",
			dataIndex: "age",
			sorter: (a, b) => a.age.length - b.age.length,
		},
		{
			title: "StartDate",
			dataIndex: "startDate",
			sorter: (a, b) => a.startDate.length - b.startDate.length,

		},
		{
			title: "Salary",
			dataIndex: "salary",
			sorter: (a, b) => a.salary.length - b.salary.length,
		}
	];

	return (
		<div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
			<Header onMenuClick={(value) => toggleMobileMenu()} />

			<Sidebar />

			<div className="page-wrapper">
				<div className="content container-fluid">
					{/* Page Header */}
					<div className="page-header">
						<div className="content-page-header">
							<h5>Default Datatable</h5>
						</div>
					</div>
					{/* /Page Header */}

					{/* Table */}
					<div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-header card-buttons">
									<h4 className="card-title">Default Datatable</h4>
									<p className="card-text">
										This is the most basic example of the datatables with zero
										configuration. Use the <code>.datatable</code> class to initialize
										datatables.
									</p>
									<div className="card-table">
										<div className="card-body DataTable">
											<div className="table-responsive table-hover">
												<Table
													//  className="table table-stripped table-hover datatable"
													pagination={{
														total: datasource.length,
														showTotal: (total, range) =>
															`Showing ${range[0]} to ${range[1]} of ${total} entries`,
														showSizeChanger: true,
														onShowSizeChange: onShowSizeChange,
														itemRender: itemRender,
													}}
													columns={columns}
													dataSource={datasource}
												/>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
					{/* Table */}

				</div>
			</div>

		</div>

	);

}
export default Datatables;