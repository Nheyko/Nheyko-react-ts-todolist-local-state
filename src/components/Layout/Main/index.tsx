import { DivCss } from './index.style'

type MainProps = {
  children: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <main>
      <DivCss>{children}</DivCss>
    </main>
  )
}
