import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import BinsList from './bins/BinsList'
import BinsMain from './bins/BinsMain'

export default props => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BinsList} />
          <Route exact path="/bins" component={BinsMain} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}