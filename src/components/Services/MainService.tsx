import React from 'react'

import ServiceCardStack from './ServicesCardStack'
import { DATA } from '@/lib/data';

const image = 'https://imageio.forbes.com/specials-images/imageserve/649e548f60d84051f9324232/Businessman-using-tech-devices-and-icons-thin-line-interface/0x0.jpg?format=jpg&crop=3789,2525,x684,y2,safe&width=960'


export const offsets = [0, 0.47, 0.65, 0.85];
export default function MainService() {
  const NUM_ITEMS = 4
  return (
    <ServiceCardStack services={DATA.services.slice(0, NUM_ITEMS)} offsets={offsets.slice(0, NUM_ITEMS)} rangeStart={0} rangeEnd={1} />
  )
}
