import React from 'react'
import ReactPdf, { PDFDownloadLink } from '@react-pdf/renderer';
const { Page, Text, View, Document, StyleSheet } = ReactPdf
export const PdfButton = () => {
     const Doc = () => (
        <Document>
            <View>
                <Page   >
                    <Text  >
                    'holla mundo'
                    </Text>
                </Page>
            </View>
        </Document>
    )

    return (
        <div>
            <PDFDownloadLink document={<Doc />} fileName="soename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
    )
}
