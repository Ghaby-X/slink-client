'use client'

import moment from 'moment'
import Calendar from './Calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarDisplay = ({ data }: { data: any; }) => {
    const events = data.map((event: any) => {
        return {
            title: `scheduled`,
            start: moment(event.startDate).toDate(),
            end: moment(event.startDate).toDate(),
        }
    })

    return (
        <div className='h-[85vh] w-full bg-white rounded-md p-4 sm:p-6 overflow-auto'>
            <Calendar events={events} />
        </div>
    )
}

export default CalendarDisplay
