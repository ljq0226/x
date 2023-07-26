'use client'
import useTheme from '@/hooks/useTheme'

export default function Home() {
  const { theme, accent, setTheme, setAccent } = useTheme()
  const accentArr = ['blue', 'orange', 'yellow', 'pink', 'green', 'purple']
  return (
    <div>
      <div className="underline">test</div>
      <button onClick={() => {
        if (theme === 'light')
          setTheme('dark')
        else
          setTheme('light')
      }}>修改 theme</button>
      <br />

      theme:{theme}
      <br />
      accent:{accent}
      <div className="text-main-accent">
        asd
      </div>
      {
        accentArr.map((item: any) => {
          return (
            <div key={item}>
              <button className="" onClick={() => {
                setAccent(item)
              }}>{item}</button>
            </div>
          )
        })
      }

    </div>
  )
}
