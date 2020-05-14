import defaultSettings from '@/settings'

const title = defaultSettings.title || '付款码支付'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
