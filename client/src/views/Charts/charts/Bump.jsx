// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bump
import { ResponsiveAreaBump } from '@nivo/bump'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import dane from './dane.js'

const Bump = ({ data /* see data tab */ }) => (
    <ResponsiveAreaBump
        data={dane}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={21}
        xPadding={0.85}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CoffeeScript'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'TypeScript'
                },
                id: 'lines'
            }
        ]}
        borderWidth={3}
        activeBorderWidth={2}
        borderColor={{ from: 'color', modifiers: [['darker', '0.4']] }}
        borderOpacity={0.7}
        inactiveBorderOpacity={0.5}
        startLabel="id"
        startLabelTextColor={{ from: 'color', modifiers: [['darker', '1']] }}
        endLabelPadding={14}
        endLabelTextColor={{ from: 'color', modifiers: [['darker', '1.1']] }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
    />
)

export default Bump