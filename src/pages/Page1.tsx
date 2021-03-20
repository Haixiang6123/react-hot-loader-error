import * as React from 'react'
import {setConfig} from 'react-hot-loader'

// If I use any methods or features of 'react-hot-loader' here,
// for example, hot(module)(Page1) or  setConfig({})
// it would show the Warning: The final argument passed to useEffect changed size between renders. The order and size of this array must remain constant.
setConfig({})

const Page1 = () => <div>Page 1</div>

export default Page1
