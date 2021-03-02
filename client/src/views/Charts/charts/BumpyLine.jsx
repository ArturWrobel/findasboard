// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bump
import { ResponsiveBump } from '@nivo/bump'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import dane from './dane1.js'

const BumpyLine = ({ data /* see data tab */ }) => (
    <ResponsiveBump
        data={dane}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        xPadding={0.5}
        xOuterPadding={0.15}
        yOuterPadding={0.15}
        colors={{ scheme: 'category10' }}
        lineWidth={3}
        activeLineWidth={3}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        startLabelPadding={30}
        endLabelPadding={10}
        pointSize={10}
        activePointSize={20}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={6}
        activePointBorderWidth={10}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        motionConfig="default"
    />
)

export default BumpyLine