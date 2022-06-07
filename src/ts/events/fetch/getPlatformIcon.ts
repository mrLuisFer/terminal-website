export const getPlatformIcon = (platform: string): string => {
  if (platform === "windows") {
    return '<i class="fa-brands fa-windows"></i>'
  } else if (platform === "linux") {
    return '<i class="fa-brands fa-linux"></i>'
  }

  return ""
}
