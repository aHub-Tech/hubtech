import { useEffect } from 'react'

function VLibras() {
  useEffect(() => {
    const plugin = 'https://vlibras.gov.br/app/vlibras-plugin.js'
    const app = 'https://vlibras.gov.br/app'

    const scriptTag = document.createElement('script')
    scriptTag.src = plugin
    scriptTag.addEventListener('load', () => {
      // @ts-ignore
      // eslint-disable-next-line no-new
      new window.VLibras.Widget(app)
    })
    document.body.appendChild(scriptTag)
  }, [])

  return (
    // @ts-ignore
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active" />
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  )
}

export default VLibras
