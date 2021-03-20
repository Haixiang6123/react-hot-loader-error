import * as React from 'react'
import {useEffect, useState} from 'react'
import {get} from 'idb-keyval'

const Tabs: React.FC = () => {
  // Show Counter
  const [, setCounter] = useState(0);

  useEffect(() => {
    get('xxx').then(() => {
      setCounter(1)
    })
  }, []);

  return (
    <div>Tabs</div>
  )
}

export default Tabs
