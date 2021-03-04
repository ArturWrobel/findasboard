import React from 'react';
import { Typography, Button } from "@material-ui/core/"
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

const Excel = (csvData) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName = "DNA_spreadsheet") => {
        console.log('csvData')

        console.log(csvData)
        csvData = JSON.stringify(csvData)
        const ws = XLSX.utils.json_to_sheet(csvData);
        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
        console.log(ws)
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button
        color="primary"
        variant="contained"
        onClick={(e) => exportToCSV(csvData)}>
            <Typography>
            XLS
    </Typography>
        </Button>
    )
}

export default  Excel

/* const jsPdfGenerator = () => {
    const input = document.getElementById('divIdToPrint')
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const date = new Date()
            let doc = new jsPDF('p', 'pt')
            doc.setFontSize(12)
            doc.text(205, 40, 'Welcome to DNA demo')
            doc.text(185, 60, 'You can customize your report')
            doc.setFontSize(15)
            doc.text(455, 30, 'Date:')
            doc.text(500, 30, String(date.toISOString()).slice(0, 10))
            doc.setFontSize(20)
            doc.text(220, 120, 'Sales breakdown')

            doc.addImage(imgData, 'PNG', 110, 140)
            doc.setFontSize(12)

            doc.text(50, 450, 'Prepared output can be fixed or dynamic and serve as a proof, ')
            doc.text(50, 470, 'that ex. th work was done, the confirmation was sent.')

            doc.text(78, 570, 'Best regards')
            doc.text(70, 600, 'Artur&Zdzislaw')
            doc.save('generated.pdf')
            window.open(doc.output('dataurlnewwindow'))
        })
} */