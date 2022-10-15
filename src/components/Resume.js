import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import ResumeFile from './ResumeFile.pdf'

const Resume = () => {
  return (
    <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white pt-5'>
      <Document file={ResumeFile}>
        <Page pageNumber={1} onRenderAnnotationLayerSuccess={console.log} />
      </Document>
    </div>
  )
}

export default Resume;