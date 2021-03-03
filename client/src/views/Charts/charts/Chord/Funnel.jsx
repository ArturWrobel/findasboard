import { ResponsiveFunnel } from '@nivo/funnel'
import dane from './dane1.js'

const Funnel = ({ data /* see data tab */ }) => (
    <ResponsiveFunnel
        data={dane}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        valueFormat=">-.4s"
        colors={{ scheme: 'spectral' }}
        borderWidth={20}
        labelColor={{ from: 'color', modifiers: [['darker', 3]] }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
)

export default Funnel