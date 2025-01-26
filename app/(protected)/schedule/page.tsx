import CalendarDisplay from '@/components/CalendarDisplay'
import { duration } from 'moment'
import React from 'react'

const page = () => {
    return (
        <div><CalendarDisplay data={[{
            title: 'event',
            startDate: '2025-01-02T10:30',
        }]} /></div>
    )
}

export default page