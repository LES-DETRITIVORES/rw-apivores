import humanize from 'humanize-string'
const MAX_STRING_LENGTH = 150
export class Utils {
  private humanize: (str: string) => string
  private MAX_STRING_LENGTH: number
  constructor() {
    this.humanize = humanize
    this.MAX_STRING_LENGTH = MAX_STRING_LENGTH
  }

  public humanizeString(str: string): string {
    return this.humanize(str)
  }

  public truncateString(str: string | number): string {
    const output = str?.toString()
    if (output?.length > MAX_STRING_LENGTH) {
      return output.substring(0, MAX_STRING_LENGTH) + '...'
    }
    return output ?? ''
  }

  public jsonTrucate = (str: string): string => {
    const output = JSON.stringify(str)
    if (output?.length > MAX_STRING_LENGTH) {
      return output.substring(0, MAX_STRING_LENGTH) + '...'
    }
    return output ?? ''
  }

  public formatDateTime = (date: string): string => {
    if (date) {
      return date.replace(/:\d{2}\.\d{3}\w/, '')
    }
  }

  public formatEnum = (values: string | string[] | null | undefined) => {
    if (values) {
      if (Array.isArray(values)) {
        const humanizedValues = values.map((value) => humanize(value))
        return humanizedValues.join(', ')
      } else {
        return humanize(values as string)
      }
    }
  }

  public checkboxInput = (checked: boolean) => {
    return <input type="checkbox" checked={checked} disabled />
  }

  public convertInDays = (dateTime: Date, isTime: boolean) => {
    const date = new Date(dateTime)
    const time = isTime
      ? date.getDay() +
        '/' +
        date.getMonth() +
        '/' +
        date.getFullYear() +
        ' à ' +
        date.getHours() +
        ':' +
        date.getMinutes()
      : date.getDay() +
        '/' +
        date.getMonth() +
        '/' +
        date.getFullYear() +
        ' de ' +
        date.getHours() +
        ':' +
        date.getMinutes()
    return time
  }

  public isConfirm = (data: string, method: string, id: number): boolean => {
    return confirm(`Are you sure you want to ${method} ${data} ${id} ?`)
  }

  public displayJSON = (
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number
  ): JSX.Element => {
    return (
      <pre>
        <code>{JSON.stringify(value, replacer, space)}</code>
      </pre>
    )
  }
  public timeTag = (datetime?: string) => {
    return (
      datetime && (
        <time dateTime={datetime} title={datetime}>
          {new Date(datetime).toUTCString()}
        </time>
      )
    )
  }
}
