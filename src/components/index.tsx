import dynamic from 'next/dynamic'

export { default as Load } from 'components/Load'
export { default as Toast } from 'components/Toast'
export { default as Banner } from 'components/Banner'
export { default as Button } from 'components/Button'
export { default as CardCreators } from 'components/CardCreators'
export { default as Title } from 'components/Title'
export { default as TopBar } from 'components/TopBar'
export { default as InputOutlined } from 'components/InputOutlined'
export const VLibras = dynamic(() => import('components/VLibras'), {
  ssr: false
})
