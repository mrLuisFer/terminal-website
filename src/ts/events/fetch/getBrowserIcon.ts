export const getBrowserIcon = (appName: string): string => {
  const browser = appName.toLowerCase()

  if (browser == "netscape") {
    return '<i class="fa-brands fa-firefox-browser"></i>'
  }

  return ""
}
