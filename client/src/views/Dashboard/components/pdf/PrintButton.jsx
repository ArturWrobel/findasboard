import React from 'react';
import { Typography, Button } from "@material-ui/core/"
import html2canvas from 'html2canvas';
import ReactGA from 'react-ga'
import jsPDF from 'jspdf';

const jsPdfGenerator = () => {
    const input = document.getElementById('divIdToPrint')
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const date = new Date()
            let doc = new jsPDF('p', 'pt')
            doc.setFontSize(12)
            doc.text(225, 40, 'Welcome to DNA demo')
            doc.text(205, 60, 'You can customize your report')
            doc.setFontSize(15)
            doc.text(455, 30, 'Date:')
            doc.text(500, 30, String(date.toISOString()).slice(0, 10))
            doc.setFontSize(20)
            doc.text(220, 120, 'Sales breakdown')

            doc.addImage(imgData, 'PNG', 110, 140)
            doc.setFontSize(12)

            doc.text(110, 450, 'Prepared output can be fixed or dynamic and serve as a proof, ')
            doc.text(110, 470, 'that ex. th work was done, the confirmation was sent.')

            doc.text(128, 550, 'Best regards')
            doc.text(120, 570, 'Artur&Zdzislaw')
            doc.save('DNAgenerated.pdf')
            window.open(doc.output('dataurlnewwindow'))
        })
        ReactGA.event({
            category: "PDF",
            action: "Created PDF report"
        })
}

const PrintButton = () => {
    return (
        <Button
            color="primary"
            variant="contained"
            onClick={jsPdfGenerator}>
            <Typography>
                <strong>PDF report</strong>
            </Typography>
        </Button>
    )
}

export default PrintButton