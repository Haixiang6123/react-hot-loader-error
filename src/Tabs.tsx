import * as React from 'react'
import {useEffect, useState} from 'react'
import {get} from 'idb-keyval'

interface Props {
  pages: string[]
}

const Tabs: React.FC<Props> = () => {
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
