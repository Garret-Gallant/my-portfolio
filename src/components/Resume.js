import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import ResumeFile from './ResumeFile.pdf'

console.log(ResumeFile)

const Resume = () => {
  return (
    <div className='fixed left-50'>
      <Document file={ResumeFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default Resume;