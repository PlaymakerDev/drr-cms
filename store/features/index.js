import user from './userSlice'
import tasksRunning from './tasksRunningSlice'
import example from './exampleSlice'
import dashboard from './dashboardSlice'
import master from './masterSlice'
import complaintListing from './complaintListingSlice'
import complaintStatistic from './complaintStatisticSlice'
import report from './reportSlice'
import setting from './settingSlice'
// {{import}}

const rootReducer = {
  user,
  tasksRunning,
	example,
	dashboard,
	master,
	complaintListing,
	complaintStatistic,
	report,
	setting,
// {{export}}
}

export default rootReducer
