interface FetchProps {
  browserLogo: string
  platformIcon: string
  platform: string
  browserIcon: string
}

export const createFetchHtml = ({
  browserLogo,
  platformIcon,
  platform,
  browserIcon,
}: FetchProps) => {
  const html = `
    <div class="browser">
      <img class="browser__img" src="${browserLogo}" alt="Firefox" draggable="false" />
      <div class="browser__content">
        <p>
          ${browserIcon}
          AppName: <span>${navigator.appName}</span>
        </p>
        <p>
          ${platformIcon}
          OS:
          <span>
            ${platform}
          </span>
        </p>
        <p>
          <i class="fa-solid fa-language"></i>
          Language: <span>${navigator.language}</span></p>
        <p>
          ${
            navigator.onLine
              ? '<i class="fa-solid fa-wifi"></i>'
              : '<i class="fa-solid fa-plane-up"></i>'
          }
          OnLine: <span>${navigator.onLine}</span></p>
      </div>
    </div>
  `

  return html
}
