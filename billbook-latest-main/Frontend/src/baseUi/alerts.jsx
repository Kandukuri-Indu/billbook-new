import React, { useState } from 'react'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'


const Alert = () => {
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }
    return (

        <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

            <Header onMenuClick={(value) => toggleMobileMenu()} />
            <Sidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="content-page-header">
                            <h5>Alert</h5>
                        </div>
                    </div>
                    {/* /Page Header */}
                    {/* Alerts */}
                    <div className="card bg-white">
                        <div className="card-body">
                            <div
                                className="alert alert-primary alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                            <div
                                className="alert alert-secondary alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                            <div
                                className="alert alert-success alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                            <div
                                className="alert alert-danger alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                            <div
                                className="alert alert-warning alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                            <div
                                className="alert alert-info alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                            <div
                                className="alert alert-light alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                            <div
                                className="alert alert-dark alert-dismissible fade show mb-0"
                                role="alert"
                            >
                                <strong>Holy guacamole!</strong> You should check in on some of those
                                fields below.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                        </div>
                    </div>
                    {/* /Alerts */}
                </div>
            </div>




        </div>
    )
}

export default Alert;