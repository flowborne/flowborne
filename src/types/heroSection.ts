export type HeroSectionProps = {
  titleStart: string
  titleHighlight: string
  titleEnd: string
  subtitle: string
  showButtons?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}
