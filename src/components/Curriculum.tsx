export const downloadCurriculum = () => {
    const curriculumUrl = '/Curriculo_Wanessa.pdf' 
    
    const downloadLink = document.createElement('a')
    downloadLink.href = curriculumUrl
    downloadLink.download = 'Wanessa_de_Almeida_Oliveira_CV.pdf'
    
    const openLink = document.createElement('a')
    openLink.href = curriculumUrl
    openLink.target = '_blank'
    openLink.rel = 'noopener noreferrer'
    
    document.body.appendChild(downloadLink)
    document.body.appendChild(openLink)
    downloadLink.click()
    openLink.click()
    
    document.body.removeChild(downloadLink)
    document.body.removeChild(openLink)
  }