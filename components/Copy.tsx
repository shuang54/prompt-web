import React from 'react'

const Copy = ({...data}) => {
  return (
      <button
        type="button"
        {...data}
        className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-slate-200 p-3 text-slate-800 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
          ></path>
          <path
            d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
          ></path>
        </svg>
        <span className="text-sm font-medium">Copy</span>
        <span className="sr-only">Copy</span>
      </button>
  )
}

export default Copy