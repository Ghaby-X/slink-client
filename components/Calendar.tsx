import {
    Calendar as BigCalendar,
    momentLocalizer
} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export default function Calendar({ events }: { events: any }) {
    return (
        <BigCalendar
            startAccessor='start'
            endAccessor='end'
            events={events}
            views={{ month: true, week: true, day: true }}
            localizer={localizer}
            defaultView='month'
        />
    )
}