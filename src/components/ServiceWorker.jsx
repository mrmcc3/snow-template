import React, { useEffect, useState } from 'react'
import { messageSW, Workbox } from 'workbox-window'

export function ServiceWorker() {
  const [update, setUpdate] = useState(null)

  // attempt to register the service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js')
      wb.addEventListener('waiting', setUpdate)
      wb.addEventListener('externalwaiting', setUpdate)
      wb.register()
    }
  }, [])

  if (update === null) {
    return null
  }

  const { sw, target: wb } = update

  const doUpdate = () => {
    wb.addEventListener('controlling', () => window.location.reload())
    messageSW(sw, { type: 'SKIP_WAITING' })
  }

  return (
    <div className="rounded-md bg-blue-50 p-4 m-2">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm leading-5 text-blue-800">
            A new version is available.
          </p>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                onClick={doUpdate}
                className="px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-blue-800 hover:bg-blue-100 focus:outline-none focus:bg-blue-100 transition ease-in-out duration-150"
              >
                Update now
              </button>
              <button
                onClick={() => setUpdate(null)}
                className="ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-blue-800 hover:bg-blue-100 focus:outline-none focus:bg-blue-100 transition ease-in-out duration-150"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={() => setUpdate(null)}
              className="inline-flex rounded-md p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none focus:bg-blue-100 transition ease-in-out duration-150"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
