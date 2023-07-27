import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import Editor from '../../components/Cards/CardEditor'
export default function AddPage() {
  return (
    <>
        <Router>
            <div>
                <Route exact path='/admin/add-page' component={Editor}>

                </Route>
            </div>
        </Router>
    
    </>
  )
}
