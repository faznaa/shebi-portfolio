import React from 'react'

import ServiceCardStack from './ServicesCardStack'

const image = 'https://imageio.forbes.com/specials-images/imageserve/649e548f60d84051f9324232/Businessman-using-tech-devices-and-icons-thin-line-interface/0x0.jpg?format=jpg&crop=3789,2525,x684,y2,safe&width=960'
export const services = [
  {
    title: 'Data Center Migration',
    subtitle: 'The Power of Secure Element Technology',
    description:"We offer comprehensive data center migration services at Royal International, ensuring a seamless transition from legacy systems to modern, scalable infrastructures. Our expert team handles every aspect of the migration process, minimizing downtime and ensuring data integrity. Whether you're moving to a cloud environment or upgrading your on-premise infrastructure, we tailor our solutions to fit your unique business needs, ensuring a smooth and efficient migration.",
    images: [image],
    bg:'#000000',
    fg:'#ffffff',
    gradientBg:"bg-gradient-to-br from-gray-900 to-gray-800",
  },
  
  {
    title: 'Project logistics',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
      images: [image],
     bg:'#8F96D4',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-blue-600 to-sky-400",
  },
  {
    title: 'Clean Room/ LAB Migration',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'We offer state-of-the-art clean room and laboratory solutions at Royal International, designed to meet the highest standards of cleanliness and safety for various industries. Our facilities are equipped with advanced technology and precision-controlled environments, ensuring that critical research, development, and manufacturing processes are conducted with minimal contamination risk. Whether for pharmaceuticals, electronics, or biotechnology, our clean rooms and labs are customized to support your unique operational requirements.',
      images: [image],
     bg:'#C493C8',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-indigo-500 to-indigo-400",
  },
  {
    title: 'Relocation Services',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
      images: [image],
     bg:'#000000',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-cyan-700 to-blue-300",
  },
];

export const offsets = [0, 0.47, 0.65, 0.85];
export default function MainService() {
  const NUM_ITEMS = 4
  return (
    <ServiceCardStack services={services.slice(0, NUM_ITEMS)} offsets={offsets.slice(0, NUM_ITEMS)} rangeStart={0} rangeEnd={1} />
  )
}
