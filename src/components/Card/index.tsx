import { CardCss, TopCardCss, HrCss, H2Css, BottomCardCss } from './index.style'

type CardProps = {
  title: string
  children?: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <CardCss>
      <TopCardCss>
        <H2Css>{title}</H2Css>
      </TopCardCss>
      <HrCss />
      <BottomCardCss>{children}</BottomCardCss>
    </CardCss>
  )
}
