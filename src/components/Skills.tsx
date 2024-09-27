import { DATA } from '@/lib/data';
import { Timeline } from '@/ui/timeline';
import Image from 'next/image';
import React from 'react'

export default function Skills() {
   
      return (
        <div className="w-full z-20">
          <Timeline data={DATA.journey} />
        </div>
      );
}
