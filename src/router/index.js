import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Home from '../screens/home'
import Detail from '../screens/detail'

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="lista de hoteles" initial={true} hideNavBar />
      <Scene key="detail" component={Detail} title="Detalle" />
    </Stack>
  </Router>
);

export default Routes