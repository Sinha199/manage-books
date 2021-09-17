import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar } from '../components'

import { BookList, BookInsert, BookUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/book/list" exact component={BookList} />
                <Route path="/book/create" exact component={BookInsert} />
                <Route
                    path="/book/update/:id"
                    exact
                    component={BookUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App