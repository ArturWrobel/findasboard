import { ResponsiveCalendar } from '@nivo/calendar'
import dane from './dane.js'

const Calendar = ({ data /* see data tab */ }) => (
    <ResponsiveCalendar
        data={dane}
        from="2016-01-01"
        to="2018-03-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#FF7A01' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)

export default Calendar