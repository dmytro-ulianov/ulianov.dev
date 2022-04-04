type Input = { className: string } | string | boolean | undefined | null

export function clsx(...inputs: Input[]) {
  let classes = ''
  for (const input of inputs) {
    if (input) {
      if (typeof input === 'string') {
        classes += ` ${input.toString()}`
      } else if (typeof input === 'object' && 'className' in input) {
        classes += ` ${input.className}`
      }
    }
  }
  return classes.trimStart()
}
