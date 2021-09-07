import dynamic from 'next/dynamic'

export { default as Load } from 'components/Load'
export { default as Toast } from 'components/Toast'
export { default as Button } from 'components/Button'
export { default as InputOutlined } from 'components/InputOutlined'
export const VLibras = dynamic(() => import('components/VLibras'), {
  ssr: false
})
