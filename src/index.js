import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import counterReducer from './reducer'

const Statistiikka = (props) => {

  if (isNaN(props.prosentti)) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
        <h2>statistiikka</h2> 
        <div>  
          <table>
            <tbody>
              <tr>
                <td>hyvä</td>
                <td>{store.getState().good}</td>
              </tr>
              <tr>          
                <td>neutraali</td>
                <td>{store.getState().ok}</td>
              </tr>
              <tr>
                <td>huono</td>
                <td>{store.getState().bad}</td>
              </tr>
              <tr>          
                <td>positiivisia</td>
                <td>{props.prosentti}%</td>
              </tr>
            </tbody>
          </table>
        </div>

      <button onClick={e =>store.dispatch({ type: 'ZERO'})}>nollaa tilasto</button>
    </div >
  )
}

const store = createStore(counterReducer)


class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({ type: nappi })
  }  

  render() {
    const hyvapros = (store.getState().good / (store.getState().good + store.getState().ok + store.getState().bad) * 100).toFixed(1)

    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka prosentti = {hyvapros}/>
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)