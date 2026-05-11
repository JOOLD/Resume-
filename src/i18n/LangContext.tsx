import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang, ResumeData } from './types'
import { resumeData } from '../data/resume'
import { resumeDataEn } from '../data/resumeEn'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: ResumeData
}

const LangContext = createContext<LangContextValue | null>(null)

function readLangFromUrl(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const params = new URLSearchParams(window.location.search)
  return params.get('lang') === 'en' ? 'en' : 'zh'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLangFromUrl)

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW'
  }, [lang])

  const setLang = (next: Lang) => {
    const url = new URL(window.location.href)
    if (next === 'en') {
      url.searchParams.set('lang', 'en')
    } else {
      url.searchParams.delete('lang')
    }
    window.history.replaceState({}, '', url.toString())
    setLangState(next)
  }

  const value = useMemo<LangContextValue>(() => {
    const t = lang === 'en' ? resumeDataEn : resumeData
    return { lang, setLang, t }
  }, [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
