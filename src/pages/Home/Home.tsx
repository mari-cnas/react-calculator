import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Config from 'Config'

import Calculator from 'components/Calculator/Calculator'
import LanguageSwitcher from 'components/LanguageSwitcher'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('home.head-title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])

  return <Calculator />
}

export default memo(Home)
