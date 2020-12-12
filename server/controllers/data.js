import Chart1 from '../models/chartdata.js';

export const getData = async (req, res) => {
    try {
        const chartData = await Chart1.find()
        console.log( chartData )
        res.status( 200 ).json( chartData )
    } catch (err) { 
        res.status( 404 ).json( { message: err.message})
    }
}

