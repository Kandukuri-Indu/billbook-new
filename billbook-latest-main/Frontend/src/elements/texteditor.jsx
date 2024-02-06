import React, { useState } from 'react'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Texteditor = () => {
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
                            <h5>Text Editor</h5>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        {/* Editor */}
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Editor</h5>
                                </div>
                                <div className="card-body">
                                    <div id="summernote" >
                                    <CKEditor editor={ClassicEditor}/>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Editor */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Texteditor