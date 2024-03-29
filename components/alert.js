import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '@/lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('bg-pmbrown-800 text-gray-300', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'border-t-2 border-orange-500': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm bg-pmbrown-800">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
