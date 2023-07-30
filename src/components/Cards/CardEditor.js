import React from 'react'
// Import ckeditor5
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'

export default function CardTable(color) {
  return (
    <>
        <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
        >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3
                          className={
                          "font-semibold text-lg " +
                          (color === "light" ? "text-blueGray-700" : "text-white")
                          }
                      >
                          Tạo bài viết của bạn
                      </h3>
                    </div>
                    {/* tạo bảng edit */}     
                </div>
            </div>
        </div>

        <CKEditor className="edit-zone"
                        editor={ Editor }
                        data='<p>Hello form editor</p>'
                        onReady={ editor => {
                          console.log('Editor is ready use', editor);
                        }}

                        onChange={ (event, editor) => {
                          const data = editor.getData();
                          console.log( {event, editor, data });
                        }}

                        onBlur={ (event, editor) => {
                          console.log("Blur.", editor);
                        }}

                        onFocus={ (event, editor) => {
                          console.log("Focus", editor);
                        }}
                      />
    </>
  )
}