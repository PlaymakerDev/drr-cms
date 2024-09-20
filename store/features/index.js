import user from './userSlice'
import tasksRunning from './tasksRunningSlice'
import example from './exampleSlice'
import dashboard from './dashboardSlice'
import master from './masterSlice'
// {{import}}

const rootReducer = {
  user,
  tasksRunning,
	example,
	dashboard,
	master,
// {{export}}
}

export default rootReducer
