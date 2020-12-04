import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Timer, TimerButtons, IncDec } from './components'

const UPDATE_TIMER = 'UPDATE_TIMER'
const CHANGE_STATUS = 'CHANGE_STATUS'
const CHANGE_TYPE = 'CHANGE_TYPE'
const UPDATE_LENGTH = 'UPDATE_LENGTH'
const RESET_TIMER = 'RESET_TIMER'

const defaultState = {
  running: false,
  currentType: "session",
  currentTimer: 1500000,
  sessionLength: 1500000,
  breakLength: 300000,
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        currentTimer: action.currentTimer
      }
    case CHANGE_STATUS:
      return {
        ...state,
        running: action.running
      }
    case CHANGE_TYPE:
      return {
        ...state,
        currentType: action.currentType,
        currentTimer: action.currentTimer
      }
    case UPDATE_LENGTH:
      return {
        ...state,
        currentTimer: action.currentTimer,
        sessionLength: action.sessionLength,
        breakLength: action.breakLength
      }
    case RESET_TIMER:
      return {
        ...defaultState
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Timer />

        <TimerButtons />

        <div id="lengths">
          <IncDec
            type="sessionLength"
          />
          
          <IncDec
            type="breakLength"
          />
        </div>

        <p id="author">
          Created by&nbsp;
          <a class="linkedin" href="https://www.linkedin.com/in/nicolas-poore/">
            Nicolás Poore
          </a>
        </p>
      </div>
    </Provider>
  );
}

export default App;
